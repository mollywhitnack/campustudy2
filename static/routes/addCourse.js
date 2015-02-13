var courses = require("../common/json/data.json");

exports.view = function(req, res) { 
	// Your code goes here
	//var newFriends = {'name': req.query.name, 'description': req.query.description, 'imageURL': 'http://lorempixel.com/500/500/people'};
	//data["friends"].push(newFriends);
	//console.log(newFriends);
	//res.render('add',data);
	// jQuery.each(course,function(){
		// if()
	// });
    var course = req.query.course;
    var professor = req.query.professor;
    if(course != null) {
    var newCourse = {
			"course": course,
			"professor": professor,		
    };

    courses["owner"].push(newCourse);

	console.log(newCourse);
  }

  res.render('addCourse',courses);
}