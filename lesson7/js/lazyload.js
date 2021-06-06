/*OPTION 1: Code used in the video.*/

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
