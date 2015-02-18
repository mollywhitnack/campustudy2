var data = require("../common/json/data.json");

exports.view = function(req, res) { 
	// Your code goes here
	//var newFriends = {'name': req.query.name, 'description': req.query.description, 'imageURL': 'http://lorempixel.com/500/500/people'};
	//data["friends"].push(newFriends);
	//console.log(newFriends);
	//res.render('add',data);
	// jQuery.each(course,function(){
		// if()
	// });
	res.render('sessions',data);
	console.log(data);
}


exports.del = function(req,res) {
	var courseName = req.params.course;
	console.log(courseName);
	var newArr=[];
	for(var i = 0; i < data.mysessions.length; i++){
		if( data.mysessions[i].course == courseName){
			console.log("do delete course");
			delete data.mysessions[i];
		}
		else{
			newArr.push(data.mysessions[i]);
		}
	}
	data.myssesions = newArr;
	
	//res.json(data);
	res.render('deleteSession', data);
	//res.end();
	//res.render('settings',data);
	//window.location.replace("../../settings");
}