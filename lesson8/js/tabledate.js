var date = new Date();

var day = date.getDay()
var month = date.getMonth()
var year = date.getFullYear()

credits = `Compiled ${month}.${day}.${year} by IsmaelM`;
document.querySelector('#credits').textContent = credits;