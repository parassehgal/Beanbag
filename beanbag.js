const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');
var funct = require('./beanbagfunct');
const restService = express();
var logfileName='c:/nodeLog.txt';

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
	
	else if(v.intent.displayName == "switch_mode_yes")
		{
			ans = funct.switch_mode_yes_funct(v);
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