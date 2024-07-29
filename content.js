// Create an image element
const image = new Image();
image.src = ("https://i.pinimg.com/originals/c8/43/17/c843170c2cca0f28099b1e8b7c78a52b.gif"); // Ensure the image file name and path are correct
image.id = "bottom-left-image";
image.alt = "Bottom Left Image";

// Log the image source URL to debug
console.log("Image source URL:", image.src);

// Error handling for image loading
image.onerror = function () {
  console.error("Failed to load image:", image.src);
};

// Append the image to the body
document.body.appendChild(image);

// Verify the image after appending
console.log("Image element:", document.getElementById("bottom-left-image"));
