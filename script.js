// Function to update the image gallery
function updateImageGallery(imageElement, imagesArray, currentIndex) {
    imageElement.classList.add("fade-out");
    setTimeout(() => {
        imageElement.src = imagesArray[currentIndex];
        imageElement.alt = imagesArray[currentIndex];
        imageElement.classList.remove("fade-out");
    }, 300);
}

// Image-Gallery 1
let thumbnails1 = document.querySelectorAll(".thumbnail1");
let currentImage1 = document.getElementById("current-image1");
const prevButton1 = document.getElementById("prev-button1");
const nextButton1 = document.getElementById("next-button1");
let currentIndex1 = 0;
const images1 = ["Gibbs.jpg", "Gibbs2.jpg", "Gibbs3.jpg", "Gibbs4.jpg", "Gibbs5.jpg", "Gibbs6.jpg", "Gibbs7.jpg", "gibbs8.jpg"];

thumbnails1.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
        updateImageGallery(currentImage1, images1, index);
        currentIndex1 = index;
    });
});

prevButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
    updateImageGallery(currentImage1, images1, currentIndex1);
});

nextButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    updateImageGallery(currentImage1, images1, currentIndex1);
});

// Image-Gallery 2
let thumbnails2 = document.querySelectorAll(".thumbnail2");
let currentImage2 = document.getElementById("current-image2");
const prevButton2 = document.getElementById("prev-button2");
const nextButton2 = document.getElementById("next-button2");
let currentIndex2 = 0;
const images2 = ["luna2.jpg", "luna3.jpg", "Bubba.jpg", "Bubba2.jpg", "Bubba3.jpg", "Donkey.jpg", "Donkey2.jpg", "walker.jpg", "walker2.jpg"];

thumbnails2.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
        updateImageGallery(currentImage2, images2, index);
        currentIndex2 = index;
    });
});

prevButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    updateImageGallery(currentImage2, images2, currentIndex2);
});

nextButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    updateImageGallery(currentImage2, images2, currentIndex2);
});

// Gallery
function updateGalleryPage(imageElement, imagesArray, currentIndex) {
    imageElement.classList.add("fade-out");
    setTimeout(() => {
        imageElement.src = imagesArray[currentIndex];
        imageElement.alt = imagesArray[currentIndex];
        imageElement.classList.remove("fade-out");
    }, 300);
}

let thumbnails = document.querySelectorAll(".thumbnail");
let currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;
const images = ["apollo.jpg", "apollo2.jpg", "apollo3.jpg", "apollo4.jpg", "apollo5.jpg", "apollo6.jpg", "apollo7.jpg", "pasture1.jpg", "pasture2.jpg"];

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
        updateGalleryPage(currentImage, images, index);
        currentIndex = index;
    });
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGalleryPage(currentImage, images, currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGalleryPage(currentImage, images, currentIndex);
});


