//Function to hide and show Menu using the hamburger button
function toggleMenu() {
	document.querySelector("#primaryNav").classList.toggle("hide");
}


//Show the current date on format Wednesday, 24 July 2020

const days = [ //Array with the name of the days
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [//Array with the name of the months
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var date = new Date();

var dayNumber = date.getDay()
var monthNumber = date.getMonth()

getFormat = `${days[dayNumber]}, ${date.getDate()} ${months[monthNumber]} ${date.getFullYear()}`;
document.querySelector('#date').textContent = getFormat;

//--------------------------------------------------------------

//Selectors to replace days in the forecast
if (days[dayNumber] == "Wednesday") {
    document.querySelector('#todayPlus1').textContent = days[dayNumber+1];
    document.querySelector('#todayPlus2').textContent = days[dayNumber+2];
    document.querySelector('#todayPlus3').textContent = days[dayNumber+3];
    document.querySelector('#todayPlus4').textContent = days[dayNumber-3];
} else if (days[dayNumber] == "Thursday") {
    document.querySelector('#todayPlus1').textContent = days[dayNumber+1];
    document.querySelector('#todayPlus2').textContent = days[dayNumber+2];
    document.querySelector('#todayPlus3').textContent = days[dayNumber-4];
    document.querySelector('#todayPlus4').textContent = days[dayNumber-3];
} else if (days[dayNumber] == "Friday") {
    document.querySelector('#todayPlus1').textContent = days[dayNumber+1];
    document.querySelector('#todayPlus2').textContent = days[dayNumber-5];
    document.querySelector('#todayPlus3').textContent = days[dayNumber-4];
    document.querySelector('#todayPlus4').textContent = days[dayNumber-3];
} else if (days[dayNumber] == "Saturday") {
    document.querySelector('#todayPlus1').textContent = days[dayNumber-6];
    document.querySelector('#todayPlus2').textContent = days[dayNumber-5];
    document.querySelector('#todayPlus3').textContent = days[dayNumber-4];
    document.querySelector('#todayPlus4').textContent = days[dayNumber-3];
} else {
    document.querySelector('#todayPlus1').textContent = days[dayNumber+1];
    document.querySelector('#todayPlus2').textContent = days[dayNumber+2];
    document.querySelector('#todayPlus3').textContent = days[dayNumber+3];
    document.querySelector('#todayPlus4').textContent = days[dayNumber+4];
}


//Banner coding
if (days[dayNumber] == "Friday") {
    //If Friday, remove the "hide" class and add the "banner" class to make it appear
    document.querySelector('#banner').classList.toggle("hide", false);
    document.querySelector('#banner').classList.toggle("banner", true);
}