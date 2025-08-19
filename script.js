// script.js

let isOn = false; // Initially bulb off hai

function toggleBulb() {
  const bulb = document.getElementById("bulb");

  if (isOn) {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"; // bulb off image
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif"; // bulb on image
  }

  isOn = !isOn; // state change kar do
}
