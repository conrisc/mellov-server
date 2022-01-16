'use strict';


/**
 * login user
 * signs in user
 *
 * userCredentials User_post User's credentials (optional)
 * returns SimpleResponse
 **/
exports.signInUser = function(userCredentials) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * register new user
 * signs up new user
 *
 * userCredentials User_post User's credentials (optional)
 * returns SimpleResponse
 **/
exports.signUpUser = function(userCredentials) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

