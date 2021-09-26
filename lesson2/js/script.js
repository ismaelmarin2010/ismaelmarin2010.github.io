var lastUpdated = document.lastModified;
document.getElementById("date").innerHTML = lastUpdated;

/*var y = new Date();
var fullYear = y.getFullYear();
document.getElementById("year").innerHTML = fullYear;*/

var y = new Date();
document.querySelector("#year").innerText = y.getFullYear();