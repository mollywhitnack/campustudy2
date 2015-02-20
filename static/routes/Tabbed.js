var data = require("../common/json/data.json");
var course = require("../common/json/course.json");

var count = [];
var t1 = 0;
exports.view = function(req, res)
{ 
	res.render('Tabbed', data);
	for(var i = 0; i < data.owner.length; i++)
	{
		var tabmatch = null;
	  for(var j = 0; j<data.sessions.length; j++)
	  {	//add matching session to owner's couse
		if( data.sessions[j].course == data.owner[i].course)
		{

			 var tabmatch = 
		 	 {	
			 "course": data.sessions[j].course,
			 "name" : data.sessions[j].name,
			 "location": data.sessions[j].location,
			 "timeleft": data.sessions[j].timeleft,
			 "professor":data.sessions[j].professor,
			 "sessionid": data.sessions[j].sessionid
    		 };
    	//console.log(tabmatch);

    	if(i == 0 )
    	{
    	var n1 = data.course1.length;
      	console.log("n1 :" +  n1 + " at t1:  " + t1);
    	//var course1{}
    	data.course1.push(tabmatch);
    	console.log();
    	//console.log(tabmatch);
    	//console.log("pushed to course1");
    	//console.log("n: " + n1);
		}
    	if(i == 1 )
    	{
    	data['course2'].push(tabmatch);
    	console.log();
    	//console.log(tabmatch);
		//console.log("pushed to course2");
		}
		if(i ==2 )
    	{
    	data['course3'].push(tabmatch);
    	    	console.log();
    	//console.log(tabmatch);
    	//console.log("pushed to course3");
		}
    	if(i == 3)
    	{
    	data['course4'].push(tabmatch);
    	    	console.log();
    	//console.log(tabmatch);
		//console.log("pushed to course4");
		}
		if(i ==4 )
    	{
    	data['course5'].push(tabmatch);
    	    	console.log();
    	//console.log(tabmatch);
    	//console.log("pushed to course5");
		}
    	else
    	{

		}
		
		tabmatch = {};
	 	
      }

  	}
  	t1 = n1;
  	console.log("t1: " + t1);
  
	console.log();
	}
	
}




		 //console.log("Session course: "+ data.sessions[j].course);
		 //console.log("Match to owner course: " + data.owner[i].course);
		 //console.log("Name: " +data.sessions[j].name);
		 /*console.log("Location: " +data.sessions[j].location);
		 console.log("Timeleft: " +data.sessions[j].timeleft);
		 console.log("professor: " +data.sessions[j].professor);
		 courselist1.push(data.sessions[j].name);
		 console.log("courselist1: " + courselist1);*/


/*function sessionList(tcourse, tid, tname, tlocation, ttime, tprof)
{
	if (courselist1[0]== undefined || )
	{
		console.log("undefined 1, add " + tcourse);
		courselist1[0]= tcourse;
	}
	else if(courselist2[0] == undefined)
		console.log("undefined 2, add " + tcourse);
		courselist2[0] = tcourse;
	console.log("tcourse: " + tcourse);
	console.log("courselist 1: " + courselist1);
	console.log("courselist 2: " + courselist2);
	console.log("courselist1 size: " + courselist1[0]);

	/*res.render('Tabb=ed',
	{
	'dName': data.sessions[i].name

	});

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