var ans;
module.exports = {

	

	on_off_funct : function(v)
	{
		if(v!=null && v.parameters && v.parameters.state && v.parameters["number-sequence"])
						{
							if(v.parameters.state == "on")
							{
							ans = "ok ac turned on in room number "+v.parameters["number-sequence"];
							}
							else if(v.parameters.state == "off")
							{
							ans = "ok ac turned off in room number "+v.parameters["number-sequence"];
							}
							
						}
				else
					{
					ans = "sorry can you say again with room number";
					}
				return ans;
	}
	

}