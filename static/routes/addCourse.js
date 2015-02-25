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
    if(course != null && course != "") {
    var newCourse = {
			"course": course,
			"professor": professor,	
    };

    if (data.owner.length < 5)
    {
    courses["owner"].push(newCourse);
	console.log(newCourse);
    }
    else
    {
        console.log("Can't add 6 courses")};
    }

  res.render('addCourse',courses);
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