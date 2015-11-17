define(function(require) {
  var q = require("q");
  var $ = require("jquery");
  var populateDom = require("populate-dom");

		return {

			postToDom: function(usersInfo){

				require(['hbs!../templates/songs'], function(songtemplate) {
					console.log('RIGHT HEREEEEEEEEE' , usersInfo);
				$("#list").html(songtemplate(usersInfo));
					console.log("THIS CRAP IS RUNNING!!!");
				});
			},

			postToDropDown: function(usersInfo){
				require(['hbs!../templates/dropdown'], function(dropdowntemp) {
				$("-dropdown").html(dropdowntemp(usersInfo));
				});
			},

			postSongsToDropDown: function(usersInfo){
				require(['hbs!../templates/dropdownsongs'], function(dropdowntemp) {
				$("-dropdown").html(dropdowntemp(usersInfo));
				});
			}
		};

// This is the end of the define closing tag
});