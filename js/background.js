const images = ["0.JPG","1.JPG","2.JPG"]

const chosenImages = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `image/${chosenImages}`;


document.body.appendChild(image);