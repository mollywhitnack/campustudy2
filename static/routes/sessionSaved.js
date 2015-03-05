var sessions = require("../common/json/data.json");

var locError = false;

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
    var time;
    if(hours == null || hours == "") time = mins;
    else if(mins == null || mins == "") time = hours*60;
    else time = parseInt(hours*60) + parseInt(mins);
    var extra = req.query.extra;
    var phone = req.query.phone;
    if(course != null && course != "") {
    var newSession = {
	
        "course": course, 
		"location": location,
		"timeleft":	time,
		"howto": howto,
		"extra": extra,
		"phone": phone
    };

    sessions["mysessions"].push(newSession);

	res.render('sessionSaved',sessions);
	console.log(newSession);

	}
	res.render('sessionSaved',sessions);

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
    if ((document.forms["addsession"]["hours"].value == null || document.forms["addsession"]["hours"].value == "") 
        && (document.forms["addsession"]["mins"].value == null || document.forms["addsession"]["mins"].value == ""))
    {
        alert("Please enter a time duration");
        return false;
    }


// allow only one session per course
   /*  for(var i = 0; i < sessions.mysessions.length; i++)
     {
    // 	console.log("course is " + sessions.mysessions[i].course.value );
        if(sessions.mysessions[i].course.value == document.forms["addsession"]["course"].value)
        {
        	alert("Could not create session. You already have an active session for this course!");
        	return false;
        }
     }; */


// get GPS location
    if (navigator.geolocation) {

       // navigator.geolocation.getCurrentPosition(gettingPosition, showError);
        //return false;    /* <-- must return false for location to be retrieved, but then the session doesn't get created :( */
        if(locError == true)
        {
            locError = false;
            return false;
        }
    } 
    else { 
    	alert("Could not create session. Please use a browser that supports location data.");
        return false;
    }

}

function gettingPosition(position)
{
 
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Please allow access to your location to create session or press CANCEL to go back to My Sessions.")
            locError = true
            break;
        case error.POSITION_UNAVAILABLE:
            alert("position unavailable")
            break;
        case error.TIMEOUT:
            alert("location request timeout")
            break;
        case error.UNKNOWN_ERROR:
            alert("unknown error")
            break;
    }
}