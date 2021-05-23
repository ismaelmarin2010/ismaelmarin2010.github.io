//Function to hide and show Menu using the hamburger button
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("hide");
}


//Function to show the current date on format Wednesday, 24 July 2020

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

document.querySelector('#todayPlus1').textContent = days[dayNumber+1];
document.querySelector('#todayPlus2').textContent = days[dayNumber+2];
document.querySelector('#todayPlus3').textContent = days[dayNumber+3];
document.querySelector('#todayPlus4').textContent = days[dayNumber+4];