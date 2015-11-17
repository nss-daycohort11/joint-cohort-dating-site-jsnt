require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase' : '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase':{
      exports: "Firebase"
    }
  }
});

require(
  ["dependencies","potential-mates", "add-favorite"], 
  function(_$_, potentialMates, addFavorites) {


  var ref = new Firebase("https://dating-app15.firebaseio.com");
  
  function login(){
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
  }

  login();

  var globalUsers;


  //"deferred.promise"
  potentialMates()
    .then(function(users) {
      globalUsers = users;
      // postToDom(users);
      console.log("globalUsers", globalUsers);
      // return addFavorites();
    })
    // .then(function(favorites) {
    //   console.log("Im Working!");
    //   return favorites;
    // });

    .fail(function(error) {
      console.log("error", error); 
    });


  


    /*
      You can choose to use the REST methods to interact with
      Firebase, or you can use the Firebase API with event
      listeners. It's completely up to each team.

      If you choose the former, I created two boilerplate modules
      named `potential-mates.js`, and `add-favorite.js`.
     */
    
  }
);
