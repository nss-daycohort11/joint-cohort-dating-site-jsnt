define(function(require) {
  var q = require("q");

 
  // This function should return a promise
  return function() {
  	var deferred = q.defer();
    $.ajax({
      url: "https://dating-app15.firebaseio.com/.json"
    })
    .done(function(response) {
      // Resolve the promise
      deferred.resolve(response);
    }).
    fail(function(xhr, status, error) {
      // Reject the promise
      deferred.reject(error);
    });
    return deferred.promise;
    };

});