const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');
var funct = require('./beanbagfunct');
//var signin = require('./oauthsign');
const restService = express();
var logfileName='c:/nodeLog.txt';

//const functions = require('firebase-functions');
const {dialogflow, SignIn} = require('actions-on-google');

const app = dialogflow({
  // REPLACE THE PLACEHOLDER WITH THE CLIENT_ID OF YOUR ACTIONS PROJECT
  clientId: '1051476906752-9j9slgeefhn4vq02cbei4esfbs95ntal.apps.googleusercontent.com',
});

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);



restService.use(bodyParser.json());

restService.post("/bean", function(req, res) {
//log(JSON.stringify(req.body.queryResult));
	var current_mode = "customise";
	var ans;
	var v=req.body.queryResult;
	
	
		if(v.intent.displayName == "on_off_state")
			{
				ans = funct.on_off_funct(v);	
			}
		else if(v.intent.displayName == "operate_mode")
			{
				ans = funct.operate_mode_funct(v);	
			}
		else if(v.intent.displayName == "combined_mode")
			{
				ans = funct.combined_mode_funct(v,current_mode);
			}
		else if(v.intent.displayName == "Default Welcome Intent")
			{
				ans = new SignIn('To get your account details');
			}
		else if(v.intent.displayName == "ask_for_sign_in_confirmation")
			{
					if (signin.status !== 'OK') {
					ans = "You need to sign in before using the app";
				  }
						else
	                  ans = "Great! Thanks for signing in.";
			}
		
		
		return res.json({
				fulfillmentText: ans,
				source: "beanbag"
			  });
		  
	
		  
}).listen(process.env.PORT||9879);
console.log("Running at port 9879");

function log(txt)
{
	fs.appendFile(logfileName, txt+'\\n', function (err) {
		if (err) console.log('Error while writing log: '+ err);
	});
}