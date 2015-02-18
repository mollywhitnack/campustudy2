var sessions = require("../common/json/data.json");

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
    var location = req.query.location;
    var howto= req.query.howto;
    var hours = req.query.hours;
    var mins = req.query.mins;
    hours = hours*60 ;
    hours = parseInt(hours) + parseInt(mins);
    var extra = req.query.extra;
    var phone = req.query.phone;
    if(course != null && course != "") {
    var newSession = {
	
        "course": course, 
		"location": location,
		"timeleft":	hours,
		"howto": howto,
		"extra": extra,
		"phone": phone
    };

    sessions["mysessions"].push(newSession);

	res.render('addSession',sessions);
	console.log(newSession);

	}
	res.render('addSession',sessions);

}

function validateForm() {
	console.log("validating form...");   
    if (document.forms["addsession"]["course"].value == null || document.forms["addsession"]["course"].value == "") {
        alert("You must select a course");
        return false;
    }
    if (document.forms["addsession"]["location"].value == null || document.forms["addsession"]["location"].value == "") {
        alert("You must enter your location");
        return false;
    }
    if (document.forms["addsession"]["howto"].value == null || document.forms["addsession"]["howto"].value == "") {
        alert("Please give a specific description of how to find you");
        return false;
    }
    if (document.forms["addsession"]["hours"].value == null || document.forms["addsession"]["hours"].value == "") {
        alert("Please enter number of hours");
        return false;
    }
    if (document.forms["addsession"]["mins"].value == null || document.forms["addsession"]["mins"].value == "") {
        alert("Please enter number of minutes");
        return false;
     }


// allow only one session per course
     for(var i = 0; i < sessions.mysessions.length; i++)
     {
    // 	console.log("course is " + sessions.mysessions[i].course.value );
        if(sessions.mysessions[i].course.value == document.forms["addsession"]["course"].value)
        {
        	alert("Could not create session. You already have an active session for this course!");
        	return false;
        }
     };


// get GPS location
    if (navigator.geolocation) {
     /*   if(navigator.geolocation.getCurrentPosition(gettingPosition)) {}
        else {
           alert("Please allow access to your location to create session or press CANCEL to go back to My Sessions.");
           return false;
        } */
    } 
    else { 
    	alert("Could not create session. Please use a browser that supports location data.");
        return false;
    }

}

function gettingPosition(position)
{

}