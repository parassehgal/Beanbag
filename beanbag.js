const express = require("express");
const bodyParser = require("body-parser");
const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/bean", function(req, res) {

	var ans;

	if(req.body.queryResult.intent.displayName == "on_off_state")
		{
			if(req.body.queryResult && req.body.queryResult.parameters && 
				req.body.queryResult.parameters.state && req.body.queryResult.parameters.number-sequence)
				{
					if((JSON.stringify(req.body.queryResult.parameters.state)) == "on")
					{
					ans = "ok ac turned on";
					}
					else if(req.body.queryResult.parameters.state == "on")
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
