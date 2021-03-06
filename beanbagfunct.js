var ans;
module.exports = {

	on_off_funct : function(v)
	{
		if(v!=null && v.parameters && v.parameters.state && v.parameters["any"])
						{
							if(v.parameters.state == "on")
							{
							ans = "ok ac turned on in "+v.parameters["any"];
							}
							else if(v.parameters.state == "off")
							{
							ans = "ok ac turned off in "+v.parameters["any"];
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
	
	combined_mode_funct : function(v,current_mode)
	{
		if(v!=null)
		{
		
			if(v.parameters.fan_speed || v.parameters.temperature)
				{
					if(current_mode == "customise")
					{
						if(v.parameters.fan_speed)
						{
							var speed = v.parameters.fan_speed;
							switch(speed)
							{
								case "high": ans = "fan running at high speed";
								break;
								case "medium": ans = "fan running at medium speed";
								break;
								case "low": ans = "fan running at low speed";
								break;
								case "auto": ans = "fan running at auto speed";
								break;
							}
							
						}
					
						else if(v.parameters.temperature)
						{
								var unit = v.parameters.temperature.unit;
								var temp = v.parameters.temperature.amount;
								var temp_change = v.parameters.temp_change;
								
								if(temp<14)
								{
									switch(temp_change)
									{
									case "increase" : ans = "Temperature increased by " + temp + " degrees";
									break;
									case "decrease" : ans = "Temperature decreased by " + temp + " degrees";
									break;
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
					}
					else
					{
					ans = "Change the mode to customise mode";
					}
				}
		
			else if(v.parameters.comfortscale)
			{
			
				if(current_mode == "comfort")
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
				else
				{
				ans = "Change the mode to comfort mode";
				}
			}
			
			
			else if(v.parameters.feeling)
			{
			
			    var feeling = v.parameters.feeling;
				if(current_mode == "customise")
				{
					switch(feeling)
					{
					case "hot": ans = "Temperature decreased by 3 degrees";
					break;
					case "slightly hot": ans = "Temperature decreased by 2 degrees";
					break;
					case "slightly cold": ans = "Temperature increased by 2 degrees";
					break;
					case "cold": ans = "Temperature increased by 3 degrees";
					break;
					}
			
				}
				
				else if(current_mode == "comfort")
				{
					
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
		
		}
		return ans;
	}
	
};