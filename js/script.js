var y = new Date();
document.querySelector("#year").innerText = y.getFullYear();

var lastUpdated = document.lastModified;
document.querySelector("#date").innerHTML = lastUpdated;