define(function(require){
var post = require("post-firebase");

  var userInfo = null;
  var facebookInfo = {};
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
      console.log("fb Object",facebookInfo);
      post.postToFirebase(facebookInfo);
    }

  };









});