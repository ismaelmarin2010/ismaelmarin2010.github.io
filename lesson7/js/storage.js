// Days between user visits to this Gallery page by this browser.

// Function to validate if local storage is available.
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


// Use of local storage based on the previous function.
if (storageAvailable('localStorage')) {
    // localStorage is available here!

    if(!localStorage.getItem('visit')) {
        // Creates the first value to populate the storage.
        var firstDate = new Date();
        localStorage.setItem('visit', firstDate.getTime());

        // Display a message for visitors in their first time.
        document.querySelector('#visitors').textContent = `First time here? Check out our Storm Center, you'd love it!`;

      } else {       
        // Get last visit (string).
        var lastVisit = localStorage.getItem('visit');

        // Get today's date.
        var today = new Date();

        // Get the difference in days between last visit and today.
        var difInSeconds = today.getTime() - parseInt(lastVisit);
        var since = Math.round(difInSeconds / (1000*60*60*24));

        // Display in Gallery the amount of days since last visit.
        document.querySelector('#visitors').textContent = `Welcome again! ${since} days since your last visit.`;

        // Save today's date into the local storage.
        localStorage.setItem('visit', today.getTime());
    }

} 
else {
    // Nope, localStorage is not available here...
    document.querySelector('#visitors').textContent = `We hope you enjoy our gallery!`;
}
