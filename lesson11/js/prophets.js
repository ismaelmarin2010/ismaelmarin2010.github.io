const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) // Feed the fetch() method with the URL.
    
    .then(function (response) { // The asynchronous Promise with the generic Response.
        return response.json(); // Extract the JSON content from the noise of the full HTTP response by using
    })                                // the json() method.


    .then(function (jsonObject) {
        
        console.table(jsonObject);  // Temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for ( let i = 0; i < prophets.length; i++ ) {
            
            // Create an empty card section for each prophet and start filling it
            let card = document.createElement('section');
            
            // Add the Title
            let h2 = document.createElement('h2');
            h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
            card.appendChild(h2);

            // Add the birth info
            let birth = document.createElement('p');
            birth.textContent = `Date of Birth: ${prophets[i].birthdate}`;
            card.appendChild(birth);
            //--
            let place = document.createElement('p');
            place.textContent = `Place of Birth: ${prophets[i].birthplace}`;
            card.appendChild(place);

            // Add an image
            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${i+1}`);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);

        }
    });

