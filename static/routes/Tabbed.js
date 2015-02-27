var data = require("../common/json/data.json");
var course = require("../common/json/course.json");

var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t5 = 0;


exports.view = function(req, res)
{ 
	var tabmatch = null;
	res.render('Tabbed', data);
	for(var i = 0; i < data.owner.length; i++)
	{	
    console.log("------------------------");
	console.log("ownerlength " + data.owner.length);
	console.log("------------------------");
	console.log("owner course " + i + ": "+ data.owner[i].course);
	console.log("------------------------");
	  for(var j = 0; j<data.sessions.length; j++)
	  {	
		if( data.sessions[j].course == data.owner[i].course)
		{
			console.log("--------Match----------------");
			console.log(data.owner[i].course);
			console.log("-----------------------------");
			 var tabmatch = 
		 	 {	
			 "course": data.sessions[j].course,
			 "name" : data.sessions[j].name,
			 "location": data.sessions[j].location,
			 "timeleft": data.sessions[j].timeleft,
			 "professor":data.sessions[j].professor,
			 "sessionid": data.sessions[j].sessionid
    		 };

			if(i == 0 && t1 ==0)
    	{
    	var n1 = data.course1.length;
    	//data.tab1.push(tabmatch);
    	data.course1.push(tabmatch);
    	console.log("i =0,  j=" + j);
    	console.log(tabmatch);
		}
    	if(i == 1 && t2 ==0)
    	{
    	var n2 = data.course2.length;	
    	data.course2.push(tabmatch);
    	console.log("i =1,  j=" + j);
    	console.log(tabmatch);
		}
		if(i ==2 && t3 ==0)
    	{
    	var n3 = data.course3.length;	
    	data.course3.push(tabmatch);
    	console.log("i =2,  j=" + j);
    	console.log(tabmatch);
		}
    	if(i == 3 && t4 ==0)
    	{
    	var n4 = data.course4.length;
    	data.course4.push(tabmatch);
    	console.log("i =3,  j=" + j);
    	console.log(tabmatch);
		}
		if(i ==4 && t5 ==0 )
    	{
    	var n5 = data.course5.length;
    	data.course5.push(tabmatch);
    	console.log("i =4,  j=" + j);
    	console.log(tabmatch);
		}
    	else
    	{
		//console.log("else no i");
		}

		//tabmatch = {};
		//console.log("-----------------");
		//console.log(tabmatch);
		//console.log(tabmatch);*/
      }
      //console.log("else no match");

  	}
  	
  	t1 = n1;
  	t2 = data.course2.length;
   	t3 = data.course3.length;	
   	t4 =data.course4.length;	
   	t5 = data.course5.length;

	
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