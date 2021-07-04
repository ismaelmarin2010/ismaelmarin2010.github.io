const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) // Feed the fetch() method with the URL.
    
    .then(function (response) { // The asynchronous Promise with the generic Response.
        return response.json(); // Extract the JSON content from the noise of the full HTTP response by using
    })                          // the json() method.


    .then(function (jsonObject) {
        
        console.table(jsonObject);  // Temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const j = 0;

        for ( let i = 0; i < towns.length; i++ ) {
            
            if (towns[i].name == "Soda Springs" or towns[i].name == "Fish Haven" or towns[i].name == "Preston") {
                // Create an empty card section for each prophet and start filling it
                let card = document.createElement('section');
                
                // Add the Title
                let title = document.createElement('h2');
                title.textContent = `${towns[i].name}`;
                card.appendChild(title);

                // Add the motto
                let motto = document.createElement('p');
                motto.textContent = `${towns[i].motto}`;
                card.appendChild(motto);
                
                // Add the year it was founded
                let founded = document.createElement('p');
                founded.textContent = `Year Founded: ${towns[i].yearFounded}`;
                card.appendChild(founded);

                // Add the population
                let popul = document.createElement('p');
                popul.textContent = `Population: ${towns[i].currentPopulation}`;
                card.appendChild(popul);

                // Add the annual rain fall
                let rain = document.createElement('p');
                rain.textContent = `Average Rainfall: ${towns[i].averageRainfall}`;
                card.appendChild(rain);

                // Add an image
                let image = document.createElement('img');
                image.setAttribute('src', `images/${j}.jpg`);
                image.setAttribute('alt', `${towns[i].name} random picture`);
                card.appendChild(image);

                document.querySelector('div.towns').appendChild(card);

                j++
            }

        }
    });

