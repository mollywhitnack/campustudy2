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
	console.log(course);
	res.render('settings',data);
}

exports.del = function(req,res) {
	var courseName = $(this).course;
//	console.log("Hi Guys!!!!");
	for(var i = 0; i < data.owner.length; i++){
		if( data.owner[i].course == courseName){
			delete data.owner[i];
		}
	}

	res.render('settings', data);
}