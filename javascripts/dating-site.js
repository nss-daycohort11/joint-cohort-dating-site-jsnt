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
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
  ["dependencies", "firebase", "auth", "getProfileInfo"], 
  function(_$_, fb, auth, getProfileInfo) {

  var ref = new Firebase("https://dating-app15.firebaseio.com");
  var authData = ref.getAuth();

  console.log(authData);
  
  $('#login').click(function(){
        console.log("click");
          //if there is no token key on the authData object, authenticate with 
            //facebook Auth
            if(authData === null){
              ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                  console.log("Login Failed!", error);
                } else {
                  console.log("Authenticated successfully with payload:", authData);
                  auth.setUid(authData.uid);
                }
              });
            //User alreddy authenticated ,store uid and show data
            } else {
              auth.setUid(authData.uid);
              }   
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
