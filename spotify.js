'use strict';

const client_id = 'ff8f2165d1684f439285cce637818d48';
const client_secret = '3083640769194f1da398a4f042416198';
const redirect_uri = 'http://localhost:8081/spotify/callback';

const stateKey = 'spotify_auth_state';

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function injectSpotify(app) {
  app.use('/spotify/login', function(req, res) {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
    var url = 'https://accounts.spotify.com/authorize'
        + `?response_type=code`
        + `&client_id=${client_id}`
        + `&scope=${scope}`
        + `&redirect_uri=${redirect_uri}`
        + `&state=${state}`;

    res.writeHead(302, {
      'Set-Cookie': [`${stateKey}=${state}`],
      Location: url,
    });
    res.end();
  });

  app.use('/spotify/callback', function(req, res) {
    const params = req.url.split('?')[1].split('&').map(keyVal => keyVal.split('=')).reduce((acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    }, {})

    const cookies = req.headers.cookie.split(';').map(cookiePair => cookiePair.split('=')).reduce((acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    }, {});


    var code = params.code || null;
    var state = params.state || null;
    var storedState = cookies ? cookies[stateKey] : null;

    console.log(state, storedState, cookies);

    if (state === null || state !== storedState) {
      res.redirect('/#' +
        'error=state_mismatch'
        );
    } else {
      res.setHeader('Set-Cookie', [`${stateKey}=`])

      const data = new URLSearchParams({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      });

      axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        data
      }).then(response => {
        console.log('#1 Got access data: ', response.data);
        const { access_token, refresh_token } = response.data;

        res.writeHead(200, {
          'Content-Type': 'text/html',
        });

        const result = `
          <!DOCTYPE html>
            <head>
              <title>What appy</title>
            </head>
            <body>
              <script>
                const opener = window.opener;
                if (opener) {
                  const tokens = {
                    access_token: '${access_token}',
                    refresh_token: '${refresh_token}'
                  }
                  opener.postMessage(tokens, 'http://what-appy.herokuapp.com');
                }
                window.close();
              </script>
            </body>
          </html>
        `;

        res.end(result);
      });
    }
  });
}

module.exports = {
  injectSpotify
}
