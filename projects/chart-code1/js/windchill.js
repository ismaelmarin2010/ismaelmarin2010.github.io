const stringTemp = document.querySelector('.temp').textContent;
const stringWind = document.querySelector('.wind').textContent;

var temp = parseInt(stringTemp, 10);
var wind = parseInt(stringWind, 10);

if (temp <= 50) {
    document.querySelector('.windChill').textContent = "N / A";
} else {
    var wcFactor = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp *  Math.pow(wind, 0.16));
    document.querySelector('.windChill').textContent = wcFactor;
}



