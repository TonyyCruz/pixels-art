let colorSelected = '';

window.onload = function() {
  colorSelected = 'black';
  let painting = document.getElementById(colorSelected);
  painting.classList.add('selected');
  console.log(painting);
};
let removeSelected = document.getElementsByClassName('selected');

let blackSelected = document.querySelector('#black');
blackSelected.addEventListener('click', colorBlack);
function colorBlack() {
  removeSelected[0].classList.remove('selected');
  colorSelected = 'black';
  blackSelected.classList.add('selected');
}

let redSelected = document.querySelector('#red');
redSelected.addEventListener('click', colorRed);
function colorRed() {
  removeSelected[0].classList.remove('selected');
  redSelected.classList.add('selected');
  colorSelected = 'red';
}

let blueSelected = document.querySelector('#blue');
blueSelected.addEventListener('click', colorblue);
function colorblue() {
  removeSelected[0].classList.remove('selected');
  blueSelected.classList.add('selected');
  colorSelected = 'blue';
}

let greenSelected = document.querySelector('#green');
greenSelected.addEventListener('click', colorgreen);
function colorgreen() {
  removeSelected[0].classList.remove('selected');
  greenSelected.classList.add('selected');
  colorSelected = 'green';
}

let paint = document.querySelector('#pixel-board');
paint.addEventListener('click', colorChange);
function colorChange(event) {
  event.target.style.backgroundColor = colorSelected;
  console.log(event.target);
}

