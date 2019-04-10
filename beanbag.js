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
			if(req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.state)
				{
					ans = "hello from api";
				}
		}
		
		
	return res.json({
			fulfillmentText: ans,
			source: "beanbag"
		  });
		  
}).listen(process.env.PORT||9879);
