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
	else if(v.intent.displayName == "customise_mode")
		{
			ans = funct.customise_mode_funct(v);
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