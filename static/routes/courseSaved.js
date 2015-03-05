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
    if((course != null && course != "") && courses.owner.length != 5) {

    var newCourse = {
            "course": course.toLowerCase().replace(/\s+/g, ''),
			"professor": professor,	
    };

    courses["owner"].push(newCourse);

	console.log(newCourse);
    }

  res.render('courseSaved',courses);
}

function validateForm() {

	console.log("validating form...");   
    if (document.forms["addcourse"]["course"].value == null || document.forms["addcourse"]["course"].value == "") {
        alert("You must enter a course ID");
        return false;
    }
    if (document.forms["addcourse"]["professor"].value == null || document.forms["addcourse"]["professor"].value == "") {
        alert("Please enter professor's name");
        return false;
    }
    
}

