var data = require("../common/json/data.json");

exports.view = function(req, res) { 
var newsessionid = req.params.name;
for(var i = 0; i < data.sessions.length; i++)
{
	if( data.sessions[i].sessionid == newsessionid)
		{
			console.log("Works, save data: "+ newsessionid);
			console.log("name: "+ data.sessions[i].name);
			res.render('detailview1',
			{
			'dName': data.sessions[i].name,
			'dLocation': data.sessions[i].location,
			'dHowto':data.sessions[i].howto,
			'dTime': data.sessions[i].timeleft,
			'dProfessor': data.sessions[i].professor,
			'dPhone': data.sessions[i].phone,
			'dExtra': data.sessions[i].extra

			});
		}
	}
	
}

