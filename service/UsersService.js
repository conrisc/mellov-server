'use strict';


/**
 * adds a note item
 * Adds an item to the database
 *
 * noteItem NoteItem Note item to add (optional)
 * returns String
 **/
exports.addNote = function(noteItem) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adds a song item
 * Adds an item to the database
 *
 * songItem SongItem Song item to add (optional)
 * returns String
 **/
exports.addSong = function(songItem) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adds a tag item
 * Adds an item to the database
 *
 * tagItem TagItem Tag item to add (optional)
 * returns String
 **/
exports.addTag = function(tagItem) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get data
 * By passing in url, you can fetch data 
 *
 * title String title to search
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.getYtItems = function(title,limit) {
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
 * removes a note item
 * Removes an item from the database
 *
 * id String note id
 * no response value expected for this operation
 **/
exports.removeNote = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * removes a song item
 * Removes an item from the database
 *
 * id String song id
 * no response value expected for this operation
 **/
exports.removeSong = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * removes a song item
 * Removes an item from the database
 *
 * id String tag id
 * no response value expected for this operation
 **/
exports.removeTag = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches note
 * By passing in the appropriate options, you can search for available note in the system 
 *
 * id String note id (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchNote = function(id,skip,limit) {
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
 * Search song
 * By passing in the appropriate options, you can search for available song in the system 
 *
 * id String song id (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * title String a phrase song's title must contain (optional)
 * tags List tags which song must contain (optional)
 * sort String type of sort to use (optional)
 * returns List
 **/
exports.searchSong = function(id,skip,limit,title,tags,sort) {
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
 * Search tag
 * By passing in the appropriate options, you can search for available tag in the system 
 *
 * id String tag id (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchTag = function(id,skip,limit) {
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
 * updates a note item
 * Updates an item in the database
 *
 * noteItem NoteItem Note item to update (optional)
 * no response value expected for this operation
 **/
exports.updateNote = function(noteItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * updates a song item
 * Updates an item in the database
 *
 * songItem SongItem Note item to update (optional)
 * returns SongItem
 **/
exports.updateSong = function(songItem) {
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
 * updates a tag item
 * Updates an item in the database
 *
 * tagItem TagItem Note item to update (optional)
 * no response value expected for this operation
 **/
exports.updateTag = function(tagItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

