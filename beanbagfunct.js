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
			ans = "Temperature set to "+ temp + "°" + unit;
			}
		
		}
		return ans;
	}

};