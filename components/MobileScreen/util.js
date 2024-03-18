function test(base_img, id) {
  // Assume base64String is your Base64 encoded string
  if (base_img) {
    // Get the reference to the div element
    var div = document.getElementById(id);
    var image = new Image();
    image.src = base_img;
    // Set the background image using the Base64 string
    div.style.backgroundImage = "url('" + image.src + "')";
    console.log(image.src);
  }
}

export default test;
