var data = require("../common/json/data.json");
var course = require("../common/json/course.json");

exports.view = function(req, res)
{ 
	console.log(course);
	res.render('Tabbed', data);

	//var tCourse = req.params.course;
	for(var i = 0; i < data.sessions.length; i++)
	{for(var j = 0; j<data.owner.length; j++)
		if( data.sessions[i].course == data.owner[j].course)
		{
		 console.log("Session: "+ data.sessions[i].course + " Owner: " + data.owner[j].course);
		 return data.sessions[i].name;
		 /*res.render('Tabbed',
			{
			'tName': data.sessions[i].name,
			'tLocation': data.sessions[i].location,
			'tProfessor': data.sessions[i].professor
			});*/
		}
	}

}


/*function initializePage() 
{
  console.log("Javascript connected!");
  console.log("friend name", $(this).text());
}


function findCourse(sessions)
{
	if(course == "cse12")
	{
		return course;
	}
	else {
		console.log(course+ " not known for anagramming.");
	}

}*/