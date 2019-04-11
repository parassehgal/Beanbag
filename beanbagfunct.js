var ans;
module.exports = {

	on_off_funct : function(v)
	{
		if(v!=null && v.parameters && v.parameters.state && v.parameters["flight-number"])
						{
							if(v.parameters.state == "on")
							{
							ans = "ok ac turned on in "+v.parameters["flight-number"];
							}
							else if(v.parameters.state == "off")
							{
							ans = "ok ac turned off in "+v.parameters["flight-number"];
							}
							
						}
				else
					{
					ans = "sorry can you say again?";
					}
				return ans;
	},
	
	operate_mode_funct : function(v)
	{
		if(v!=null && v.parameters && v.parameters.mode)
						{
						
							if(v.parameters.mode == "comfort")
							{
							ans = "ok ac running in comfort mode";
							}
							else if(v.parameters.mode == "away")
							{
							ans = "ok ac running in away mode";
							}
							else if(v.parameters.mode == "customise")
							{
							ans = "ok ac running in customise mode";
							}
							
						}
				else
					{
					ans = "sorry can you specify the valid mode";
					}
				return ans;
	},
	
	customise_mode_funct : function(v)
	{
		if(v!=null)
		{
		
			if(v.parameters.fan_speed)
			{
				var speed = v.parameters.fan_speed;
				if(speed == "high")
				{
				ans = "fan running at high speed";
				}
				else if(speed == "medium")
				{
				ans = "fan running at medium speed";
				}
				else if(speed == "low")
				{
				ans = "fan running at low speed";
				}
				else if(speed == "auto")
				{
				ans = "fan running at auto speed";
				}
			}
			
			else if(v.parameters.temperature)
			{
					var unit = v.parameters.temperature.unit;
					var temp = v.parameters.temperature.amount;
					
					if(temp<14)
					{
						if(v.queryText.includes("increase"))
						{
						ans = "Temperature increased by " + temp + " degrees";
						}
						else if(v.queryText.includes("decrease"))
						{
						ans = "Temperature decreased by " + temp + " degrees";
						}
					}
					else
					{
						if(unit == "C")
						{
						ans = "Temperature set to "+ temp + " degrees celsius" ;
						}
						else if(unit == "F")
						{
						ans = "Temperature set to "+ temp + " degrees farenheit" ;
						}
					}
			}
			
			else if(v.parameters.feeling)
			{
				var feeling = v.parameters.feeling;
				if(feeling == "hot")
				{
				ans = "Temperature decreased by 3 degrees";
				}
				else if(feeling == "slightly hot")
				{
				ans = "Temperature decreased by 2 degrees";
				}
				else if(feeling == "slightly cold")
				{
				ans = "Temperature increased by 2 degrees";
				}
				else if(feeling == "cold")
				{
				ans = "Temperature increased by 3 degrees";
				}
			
			}
		
		}
		return ans;
	},
	
	comfort_mode_funct : function(v)
	{
	
		if(v!=null)
		{
			if(v.parameters.comfortscale)
			{
				var comfort = v.parameters.comfortscale;
				switch(comfort)
				{
				case "cool" : ans = "AC running in cool mode";
								break;
				case "slightly cool" : ans = "AC running in slightly cool mode";
								break; 
				case "comfortable" : ans = "AC running in comfortable mode";
								break; 
				case "slightly warm" : ans = "AC running in slightly warm mode";
								break; 
				case "warm" : ans = "AC running in warm mode";
								break; 
				
				}
			}
			else if(v.parameters.feeling)
			{
				var feeling = v.parameters.feeling;
				switch(feeling)
				{
				case "cold" : ans = "AC running in warm mode";
								break;
				case "slightly cold" : ans = "AC running in slightly warm mode";
								break; 
				case "slightly hot" : ans = "AC running in slightly cool mode";
								break; 
				case "hot" : ans = "AC running in cool mode";
								break; 
				
				}
			}
		}
		return ans;
	},
	
	switch_mode_yes_funct : function(v)
	{
		var mode = v.outputContexts[0].parameters.mode;
		switch(mode)
		{
		case "comfort" : ans = "switched to comfort mode";
		break;
		case "away" : ans = "switched to away mode";
		break;
		case "customise" : ans = "switched to customise mode";
		break;
		console.log(ans);
		}
		return ans;
	}

};