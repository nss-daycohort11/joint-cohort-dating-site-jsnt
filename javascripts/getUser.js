define(function(require) {
  var q = require("q");

 
  // This function should return a promise
  return function(currentUserKey) {
  	var deferred = q.defer();
    $.ajax({
      url: "https://dating-app15.firebaseio.com/users/"+currentUserKey+".json/"
    })
    .done(function(userObject) {
      // Resolve the promise
      console.log("userObject", userObject);
      deferred.resolve(userObject);
    }).
    fail(function(xhr, status, error) {
      // Reject the promise
      deferred.reject(error);
    });
    return deferred.promise;
    };

});