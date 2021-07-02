var date = new Date();

var day = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()

credits = `${day}`//`Compiled ${month}.${day}.${year} by IsmaelM`;
document.querySelector('#credits').textContent = credits;