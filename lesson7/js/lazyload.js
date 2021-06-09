/*OPTION 1: Code used in the Youtube video

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
};


const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

/*OPTION 2: Code used in the MDN lecture.

// imagesToLoad contains references to all the imates.
let imagesToLoad = document.querySelectorAll('img[data-src]');

//loadImages moves the path from data-src to src, and then removes data-src.
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//Then we loop through each image and load it:
imagesToLoad.forEach((img) => {
    loadImages(img);
  });
*/

/*OPTION 3: Code used in the BYU video.

// get all imgs with data-src attribute.
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (images) => {
    images.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src')};
};

// first check to see if Intersection Observer is supported 
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                preloadImage(item.target);
                imgObserver.unobserve(item.target);
            }
        })
    }, imgOptions);
} else { // just load ALL images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}*/

/*OPTION 4: Code extracted from MDN example*/

// Progressive loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}