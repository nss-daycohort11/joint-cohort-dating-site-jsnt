define(function(require) {
  var q = require("q");

  return{

      postToFirebase: function(facebookInfo) {
        var deferred = q.defer();
        $.ajax({
          url: "https://dating-app15.firebaseio.com/users.json",
          method: "POST",
          data:JSON.stringify(facebookInfo)
        })
        .done(function(facebookInfo) {
          // Resolve the promise
          console.log("grool");
          deferred.resolve(facebookInfo);
          
        })
        .fail(function(xhr, status, error) {
          // Reject the promise
          console.log("nope");
          deferred.reject(error);
          
        });

     }
  };

});
