const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');
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
			
			if(v!=null && v.parameters && v.parameters.state && v.parameters["number-sequence"])
				{
					if(v.parameters.state == "on")
					{
					ans = "ok ac turned on";
					}
					else if(v.parameters.state == "off")
					{
					ans = "ok ac turned off";
					}
					
				}
			else
				{
				ans = "sorry say again with room number";
				}
				
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
