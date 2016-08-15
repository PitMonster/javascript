/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var name = "Raghu";
var role = "Software Engineer";
console.log(name);

var awesomeThoughts = "I am Raghu & I am Awesome" ;
console.log(awesomeThoughts);

var funthoghts = awesomeThoughts.replace("Awesome", "Fun");
console.log(funthoghts);

$("#main").append(funthoghts); 


*/

/*
  This code will look for HTMLheaderName/HTMLheaderRole in helper.js file & replace '%data%' with the desired string.

 */

/*

var formattedName = HTMLheaderName.replace("%data%", name);
var formmttedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formmttedRole); 
$("#header").prepend(formattedName); 

*/

/*
var numbers = [3, 10, 34];
var newarray = numbers.slice(0,numbers.length-1);
//$("#header").append(newarray);

var lastnumber = numbers.pop();
lastnumber =  lastnumber + 1;
newarray.push(lastnumber);
$("#header").append(newarray);

*/


//var skills = ['Java', 'NodeJS', 'Javascript', 'TestNG'];

// var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.title);
// var formattedprojectdate = HTMLprojectDates.replace("%data%", projects.dates);
// var formattedprojectdescription = HTMLprojectDescription.replace("%data%", projects.description);
// var formattedprojectimage = HTMLprojectImage.replace("%data%", projects.image);



var work = {
	"jobs": [
	{
		"employer": "ChargePoint",
		"title" : "Software Engineer",
		"location" : "Campbell, CA",
		"dates" : "2012 - Current",
		"description" : "NOS development"
	},
	{
		"employer": "Infosys",
		"title" : "Software Engineer",
		"location" : "Bangalore, India",
		"dates" : "2007 - 2010",
		"description" : "Development of Web Application for a leading Bank"

	}
	]

};


var projects = {
	"projects": [{
		"title": "NOS Automation",
		"dates": " July 2015 - till date",
		"description": "Complete Web Automation",
		"images": [{
			"image": "http://www.testingdiaries.com/wp-content/uploads/2014/12/selenium.jpg"
		}]
	}, {
		"title": "AMIE",
		"dates": " July 2007 - Jun 2010",
		"description": "BOFA Internal portal",
		"images": [{
			"image": "https://matthewsfreemedicalclinic.files.wordpress.com/2015/08/bank-of-america-logo.png"

		}]
	}]
};


var bio = {
	"name" : "Raghu",
	"role"  : "Software Engineer",
	"welcomemessage" : "Hi There, welcome to my Bio Page",
	"biopic" : "http://img.lum.dolimg.com/v1/images/open-uri20150608-27674-1jdbpa8_be64ca1b.png?region=0%2C0%2C600%2C565",
	"skills" : ["JAVA","JavaScript","Selenium", "TestNG", "Appium"],
	"contacts" : {
		"mobile": "214-554-8281",
		"email": "ras.raghu@gmail.com",
		"github": "raghunathtayanna",
		"twitter": "abcdesgh",
		"location": "San Jose, CA"
	}
};


var education = {
	"schools": [
	{
		"name" : "The University of Texas at Dallas",
		"location" : "Richardson",
		"degreedates" : "2012",
		"url" : "www.utdallas.com",
		"majors" : ["Information Science","Business Intelligence"]
	},
	{
		"name" : "PESIT",
		"location" : "Bangalore",
		"url" : "www.utdallas.com",
		"majors" : ["Computer Science", "Networking"],
		"degreedates" : "2007"
	}
	], 
	"onlinecourses" : [{
		"title": "Project management",
		"school": "UTD",
		"dates": "May 2011",
		"url": "utd.com"
	},
	{
		"title": "Emterprise Resource Planning",
		"school": "UTD",
		"dates": "May 2011",
		"url": "utd.com"
	}]
};

// education["school"] = "University of Texas at Dallas";
// education["year"] = "2010 - 2012";
// education["city"] = "Richardson" ;


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formmttedRole = HTMLheaderRole.replace("%data%", bio.role);
var formmttedcontact = HTMLmobile.replace("%data%", bio.contactinfo);
var formmttedpictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formmttedwelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
//var formmttedskills = HTMLskills.replace("%data%", bio.skills);
var formmttedposition = HTMLworkTitle.replace("%data%", work["position"]);
var formmttedschoolname = HTMLschoolName.replace("%data%", education.school);



// $("#header").prepend(formattedprojectimage);
// $("#header").prepend(formattedprojectdescription);
// $("#header").prepend(formattedprojectdate);
//$("#header").prepend(formattedprojecttitle); 
$("#header").prepend(formmttedskills); 
$("#header").prepend(formmttedwelcomemessage); 
$("#header").prepend(formmttedpictureURL); 
$("#header").prepend(formmttedcontact); 
$("#header").prepend(formmttedRole); 
$("#header").prepend(formattedName); 
// $("#header").append(formmttedposition); 
// $("#header").append(formmttedschoolname); 

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formmttedskills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formmttedskills);	

	formmttedskills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formmttedskills);	

	formmttedskills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formmttedskills);	

	formmttedskills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formmttedskills);	

	formmttedskills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formmttedskills);	

}

for (i in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

	var formattedemployertitle = formattedemployer + formattedtitle + formattedworkLocation + formattedworkDates + formattedworkDescription;
	$(".work-entry:last").append(formattedemployertitle);

}



/*

// 	Begin - Below code is to cmanipulate a String to UpperCase & LowerCase
// 	
var mixname = "raGhunaTh TaYanna"
var splitname = mixname.split(" ",1000);
var firstname = splitname[0] ;
var lastname = splitname[1];
splitname[1] = splitname[1].toUpperCase();
splitname[0] = splitname[0].slice(0, 1).toUpperCase() + splitname[0].slice(1).toLowerCase();
finalname = splitname.join(" ");

console.log(mixname);
console.log(splitname);
console.log(splitname[0]);
console.log(splitname[1]);
console.log(splitname[0]);
console.log(splitname[1].toUpperCase());
console.log(finalname);

// Ends
// 
// 
// 
// 

*/

/*
var length = skills.length;
var number = skills[skills.length - 1] - 1 ;
$("#header").append(number);
*/

