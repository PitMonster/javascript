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


var skills = ['Java', 'NodeJS', 'Javascript', 'TestNG'];
var bio = {
	"name" : "Raghu",
	"role"  : "Software Engineer",
	"contactinfo" : "214-554-8281",
	"pictureURL" : "http://img.lum.dolimg.com/v1/images/open-uri20150608-27674-1jdbpa8_be64ca1b.png?region=0%2C0%2C600%2C565",
	"welcomemessage" : "Hi There, welcome to my Bio Page",
	"skills" : skills

};


var projects = {
	"title" : "NOS Automation",
	 "dates" : " July 2015 - till date",
	 "description" : "Complete Web Automation",
	 "image": "http://www.testingdiaries.com/wp-content/uploads/2014/12/selenium.jpg"
};

var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.title);
var formattedprojectdate = HTMLprojectDates.replace("%data%", projects.dates);
var formattedprojectdescription = HTMLprojectDescription.replace("%data%", projects.description);
var formattedprojectimage = HTMLprojectImage.replace("%data%", projects.image);



var work = {};
work.position = "Software Engineer";
work.employer = "ChargePoint";
work.years = 4;
work.city = "Campbell";

var education = {
	schools: [
	{
		"name" : "The University of Texas at Dallas",
		"city" : "Richardson",
		"major" : "Information Science",
		"graduationyear" : "2012"

	},
	{
		"name" : "PESIT",
		"city" : "Bangalore",
		"major" : "Computer Science",
		"graduationyear" : "2007"
	}
	]
};

education["school"] = "University of Texas at Dallas";
education["year"] = "2010 - 2012";
education["city"] = "Richardson" ;


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formmttedRole = HTMLheaderRole.replace("%data%", bio.role);
var formmttedcontact = HTMLmobile.replace("%data%", bio.contactinfo);
var formmttedpictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formmttedwelcomemessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
var formmttedskills = HTMLskills.replace("%data%", bio.skills);
var formmttedposition = HTMLworkTitle.replace("%data%", work["position"]);
var formmttedschoolname = HTMLschoolName.replace("%data%", education.school);



$("#header").prepend(formattedprojectimage);
$("#header").prepend(formattedprojectdescription);
$("#header").prepend(formattedprojectdate);
$("#header").prepend(formattedprojecttitle); 
$("#header").prepend(formmttedskills); 
$("#header").prepend(formmttedwelcomemessage); 
$("#header").prepend(formmttedpictureURL); 
$("#header").prepend(formmttedcontact); 
$("#header").prepend(formmttedRole); 
$("#header").prepend(formattedName); 
$("#header").append(formmttedposition); 
$("#header").append(formmttedschoolname); 





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

