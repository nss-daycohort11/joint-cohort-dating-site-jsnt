define(function(require){
var post = require("post-firebase");

  var userInfo = null;
  var facebookInfo = {};
  var userID = "";

  return{
    getUserInfo: function(){
      //console.log("returning", userInfo);
      return facebookInfo;
    },
    setUserInfo: function(newId){
      //console.log("fb obj", newId);
      userInfo = newId;
      
      facebookInfo = {
        "name": userInfo.displayName,
        "id": userInfo.id,
        "gender": userInfo.cachedUserProfile.gender,
        "profileImage": userInfo.profileImageURL,
        "age": "",
        "bio": "",
        "faveLang": "",
        "link": "",
        "pcMac": "",
        "faveStack": "",
      };

      console.log("userInfo.id", userInfo.id);

      userID = userInfo.id;

      var fbRef = new Firebase("https://dating-app15.firebaseio.com/users/" + userInfo.id);
      fbRef.set(facebookInfo);

      // console.log("fb Object",facebookInfo);
      // post.postToFirebase(facebookInfo);
    },

    getUserID: function() {
      return userID;
    }

  };









});