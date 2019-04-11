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
					ans = "sorry can you say again? ";
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
	}
	

}
