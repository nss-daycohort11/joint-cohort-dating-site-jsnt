define(function(require) {
  var q = require("q");
  var $ = require("jquery");
  var potentialMates = require("potential-mates");

		return {

			postToHomePage: function(usersInfo){

				require(['hbs!../templates/home-page'], function(homePageTemp) {
					console.log('RIGHT HEREEEEEEEEE' , usersInfo);
				$("#homePage").html(homePageTemp(usersInfo));
					console.log("This is working");
				});
			},

			postToProfilePage: function(usersInfo){
				console.log("postToProfilePage activated");
				console.log("usersInfo", usersInfo);
				require(['hbs!../templates/profile-page-body'], function(dropdowntemp) {
					console.log("dropdowntemp", dropdowntemp);
				$("#profilePage").html(dropdowntemp(usersInfo));
				});
			},

			populateStandout: function(usersInfo){
				console.log("populateStandout");
				console.log("usersInfo", usersInfo);
				require(['hbs!../templates/sideBar'], function(sideBarTemplate) {
					console.log("sideBarTemplate", sideBarTemplate);
				$("#stand-out").html(sideBarTemplate({usersInfo}));
				});
			},

			populateEditProfile: function(usersInfo){
				console.log("populateEditProfile");
				console.log("usersInfo", usersInfo);
				require(['hbs!../templates/edit-profile'], function(editProfileTemplate) {
					console.log("editProfileTemplate", editProfileTemplate);
				$("#editProfile").html(editProfileTemplate({usersInfo}));
				});
			}



			
		};

// This is the end of the define closing tag
});