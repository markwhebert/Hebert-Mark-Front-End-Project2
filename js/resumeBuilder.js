var bio = {
	"name": "Mark Hebert",
	"role": "Entrepreneur",
	"contacts": {
		"mobile": "630-270-8044",
		"email": "markwhebert@gmail.com",
		"github": "markwhebert",
		"twitter": "@hebertmark",
		"location": "Chicago, IL"
	},
	"welcomeMessage": "Welcome to my online resume",
	"skills": [
		"banking", "finance", "real estate", "programming"
	],
	"biopic": 'images/bioPic.jpg',
	"displayBio": function displayBio() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

		for (contact in bio.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedContact.replace("%contact%", contact));
		}

		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

		$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
		}

		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}

		for (contact in bio.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
			$("#footerContacts").append(formattedContact.replace("%contact%", contact));
		}
	}
}

var education = {
	"schools": [
		{
			"name": "North Central College",
			"location": "Naperville, IL",
			"degree": "Bachelors of Science",
			"majors": ["Managment", "Finance", "Entrepreneurship", "Economics"],
			"dates": 2008,
			"url": "http://northcentralcollege.edu/home"
		},
		{
			"name": "Udacity",
			"location": "San Francisco, CA",
			"degree": "Nanodegree",
			"majors": ["Front-End Web Developer", "Full Stack Web Developer", "Data Analyst", "iOS Developer"],
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegree"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"
		}
	],
	"displayEducation": function displayEducation() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);

			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));

			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));

			for (major in education.schools[school].majors) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
		}

		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);

			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));

			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "Golf Delta, Inc",
			"title": "Founder & CEO",
			"location": "Dallas, TX",
			"dates": "June 2012 - present",
			"description": "A full service state of the art golf training and gaming facility.  Our patent pending RFID technology tracks the location of the golf ball in real-time within 3 inches of accuracy (compared to 7-10ft with traditional systems).  With our system, the customers will be able to play a virtual round of golf with up to 6 people from the driving range, without hitting into a screen and relying on inaccurate algorithms.  They will also be able to track their performance and play games like closest to the pin and longest drive. We anticipate the fist facility to open in the Spring of 2016."
		},
		{
			"employer": "LandToHunt.com",
			"title": "Co-Founder & Chairman",
			"location": "Chicago, IL",
			"dates": "January 2015 - present",
			"description": "LandToHunt is an online marketplace for hunters and landowners to list, search, and reserve hunting land all over the country. Reserve a property for one day or more and hunt without hassle. LandToHunt allows landowners to choose who is on their property and control the money they make. www.LandToHunt.com"
		}
	],
	"displayWork": function displayWork() {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);

			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));

			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));

			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
}

var projects = {
	"projects": [
		{
			"title": "Golf Delta",
			"dates": "January 2015 - February 2015",
			"description": "Website for Golf Delta",
			"images": ["images/gd.jpg"]
		},
		{
			"title": "LandToHunt",
			"dates": "January 2015 - February 2015",
			"description": "Website for LandToHunt",
			"images": ["images/lth.jpg"]
		}
	],
	"displayProjects": function displayProjects() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));

			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));

			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
				}
			}
		}
	}
}

bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = bio.name;

	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);