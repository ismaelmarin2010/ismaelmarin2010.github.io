//Days between user visits to this Gallery page by the user's agent (browser).

var lastVisited = window.localStorage;

var storage = new Array;

storage.forEach(lastVisited => console.log(lastVisited));

document.querySelector('#visit').textContent = storage;
