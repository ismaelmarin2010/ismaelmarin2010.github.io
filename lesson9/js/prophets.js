const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) // Feed the fetch() method witgh the URL.
    .then(function (response) { // The asynchronous Promise with the generic Response.
        return response.json(); })// Extract the JSON content from the noise of the full HTTP response by using the json() method.
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++ ) {

        } });

