/////////////////////////////
// Parallel Series Lesson //
////////////////////////////


import async from 'async'

async.parallel([
    function(callback) {
      setTimeout(function() {
        // console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        // console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    // console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });


async.series([
    (callback) => {
        setTimeout(() => {
            // console.log('This is the first function');
            callback(null, 1);
        }, 500);
    },
    (callback) => {
        // console.log('This is the second function');
        callback(null, 2);
    }
], (err, results) => {
    // if (err) console.error(err);
    // console.log(results);
});