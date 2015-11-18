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
  ["dependencies","potential-mates", "add-favorite", "auth", "getProfileInfo", "populate-dom", "getUser"], 
  function(_$_, potentialMates, addFavorites,auth, getProfileInfo, PopulateDom, getUser) {


  var ref = new Firebase("https://dating-app15.firebaseio.com");
  var authData = ref.getAuth();

  console.log(authData);

  var globalUsers;

$("#userSideBar").hide();
$("#profilePage").hide();
$("#editProfile").hide();
//$("#browseProspectsPage").hide();




  // potentialMates()
  //   .then(function(users) {
  //     globalUsers = users;
  //     // postToDom(users);
  //     console.log("globalUsers", globalUsers);
  //     PopulateDom.postToProfilePage(globalUsers); 

  //   })

    // .fail(function(error) {
    //   console.log("error", error); 
    // });


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
                  auth.setUserInfo(authData.facebook);
               
                }
              });
            //User alreddy authenticated ,store uid and show data
            } else {
              auth.setUserInfo(authData.facebook);

              //auth.setFbInfo(authData.facebook.displayName);
              }

            console.log("auth.getUserID", auth.getUserID());
            var currentUserID = auth.getUserID();

            getUser(currentUserID)
            .then(function(userProfile) {
              console.log("userProfile", userProfile);
              var userArray = [];
              userArray.push(userProfile);
              console.log("userArray", userArray);
              PopulateDom.populateStandout(userProfile);
              PopulateDom.populateEditProfile(userProfile);

              potentialMates()
              .then(function(users) {
                globalUsers = users;
                // postToDom(users);
                console.log("globalUsers", globalUsers);
                console.log("globalUsers.users", globalUsers.users);
                var usersObject = globalUsers.users;

                var matches = [];

                $.map(usersObject, function(key, value) {
                  console.log("current key.id", key.id);
                  if (key.id === currentUserID) {
                    console.log("I FOUND A MATCH!!!!!!");
                    
                  } else {
                    matches.push(key);
                  }
  
              
                });

                console.log("matches", matches);

                PopulateDom.postToProfilePage(matches); 

              });


            })
            .fail(function(error) {
              console.log("error: ", error);
            });



            $("#profilePage").show();
            $("#userSideBar").show();
    
            $("#loginPage").hide();

  });

$("body").on("click", "#edit-button", function() {
  console.log("event", event);
  $("#profilePage").hide();
  $("#editProfile").show();

});

$("body").on("click", "#save", function() {
  console.log("event", event);
  $("#profilePage").show();
  $("#editProfile").hide();

});

$("body").on("click", ".like-button", function() {
  console.log("event", event);
  console.log("this", this);

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
