const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');
var funct = require('./beanbagfunct');
var signin = require('./oauthsign');
const restService = express();
var logfileName='c:/nodeLog.txt';

const functions = require('firebase-functions');
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
	
	app.intent('Default Welcome Intent', (conv) => {
	conv.ask(new SignIn('To get your account details'));
	});

	app.intent('ask_for_sign_in_confirmation', (conv, params, signin) => {
	  if (signin.status !== 'OK') {
		return conv.ask('You need to sign in before using the app.');
	  }
	  // const access = conv.user.access.token;
	  // possibly do something with access token
	  return conv.ask('Great! Thanks for signing in.');
	});

module.exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

	
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