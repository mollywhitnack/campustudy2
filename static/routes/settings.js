var data = require("../common/json/data.json");
var course = require("../common/json/course.json");

exports.view = function(req, res) { 
	// Your code goes here
	//var newFriends = {'name': req.query.name, 'description': req.query.description, 'imageURL': 'http://lorempixel.com/500/500/people'};
	//data["friends"].push(newFriends);
	//console.log(newFriends);
	//res.render('add',data);
	// jQuery.each(course,function(){
		// if()
	// });
	//console.log(data);
	//console.log("here");
	console.log(data.owner);
	res.render('Settings',data);
}

exports.del = function(req,res) {
	var courseName = req.params.course;
	console.log(courseName);
	for(var i = 0; i < data.owner.length; i++){
		if( data.owner[i].course == courseName){
			console.log("do delete course");
			delete data.owner[i];
		}
	}
	
	//res.json(data);
	res.render('deleteCourse', data);
	//res.end();
	//res.render('settings',data);
	//window.location.replace("../../settings");
}