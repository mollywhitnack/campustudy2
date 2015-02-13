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
    hours = hours*60
    hours = hours + mins;
    var extra = req.query.extra;
    var phone = req.query.phone;
    if(course != null) {
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