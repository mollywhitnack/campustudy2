var sessions = require("../common/json/sessions.json");
var course = require("../common/json/data.json");

exports.view = function(req, res) { 
	// Your code goes here
	//var newFriends = {'name': req.query.name, 'description': req.query.description, 'imageURL': 'http://lorempixel.com/500/500/people'};
	//data["friends"].push(newFriends);
	//console.log(newFriends);
	//res.render('add',data);
	// jQuery.each(course,function(){
		// if()
	// });
	// var data3 = {'owner': []};
	// for(var i = 0; i < 3; i++){
		// data3.owner.push(course.owner[i]);
	// }
	res.render('Tabbed',course);
	console.log(course);

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