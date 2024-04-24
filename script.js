// Function to generate a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to change the background color randomly between black and gray
function changeBackgroundColor() {
  const body = document.querySelector('body');
  const randomColor = `rgb(${getRandomInt(0, 127)}, ${getRandomInt(0, 127)}, ${getRandomInt(0, 127)})`;
  body.style.backgroundColor = randomColor;
}

// Change the background color every 2 seconds
setInterval(changeBackgroundColor, 2000);
