var lastUpdated = document.lastModified;
document.getElementById("date").innerHTML = lastUpdated;

/*var y = new Date();
var fullYear = y.getFullYear();
document.getElementById("year").innerHTML = fullYear;*/

var y = new Date();
document.querySelector("#year").innerText = y.getFullYear();

/*function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}*/

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};