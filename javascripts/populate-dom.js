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
				require(['hbs!../templates/profile-page-body'], function(dropdowntemp) {
				$("#profilePage").html(dropdowntemp(usersInfo));
				});
			},

			postToProfileSidebar: function(usersInfo){
				require(['hbs!../templates/edit-profile'], function(dropdowntemp) {
				$("#editProfile").html(dropdowntemp(usersInfo));
				});
			}
		};

// This is the end of the define closing tag
});