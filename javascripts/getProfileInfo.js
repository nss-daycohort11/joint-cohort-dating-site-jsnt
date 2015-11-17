define(function(require) {
  var q = require("q");
  var $ = require("jquery");

  console.log("I see get profile info!");

  $("#save").on("click", function() {

  	//console.log("you clicked save!");

		var age = $("#age").val();
		var gender = $("#gender").val();
		var lang = $("#language").val();
		var link = $("#gitHub").val();
		var pcMac = $("#compPref").val();
		var stack = $("#stack").val();
		var bio = $("#bio").val();

		console.log("age:", age);
		console.log("gender:", gender);
		console.log("language:", lang);
		console.log("link:", link);
		console.log("pc/mac:", pcMac);
		console.log("stack pref:", stack);
		console.log("bio:", bio);

		var profile = {
			"age": age,
			"bio": bio,
			"faveLang": lang,
			"link": link,
			"pcMac": pcMac,
			"faveStack": stack,
			"gender": gender
		};

		console.log("profile object", profile);


  });













});