let colorSelected = '';

window.onload = function () {
  colorSelected = 'black';
  const painting = document.getElementById(colorSelected);
  painting.classList.add('selected');
};
const removeSelected = document.getElementsByClassName('selected');

function colorBlack() {
  removeSelected[0].classList.remove('selected');
  colorSelected = 'black';
  blackSelected.classList.add('selected');
}
const blackSelected = document.querySelector('#black');
blackSelected.addEventListener('click', colorBlack);

function colorRed() {
  removeSelected[0].classList.remove('selected');
  redSelected.classList.add('selected');
  colorSelected = 'red';
}
const redSelected = document.querySelector('#red');
redSelected.addEventListener('click', colorRed);

function colorblue() {
  removeSelected[0].classList.remove('selected');
  blueSelected.classList.add('selected');
  colorSelected = 'blue';
}
const blueSelected = document.querySelector('#blue');
blueSelected.addEventListener('click', colorblue);

function colorgreen() {
  removeSelected[0].classList.remove('selected');
  greenSelected.classList.add('selected');
  colorSelected = 'green';
}
const greenSelected = document.querySelector('#green');
greenSelected.addEventListener('click', colorgreen);

const paint = document.querySelector('#pixel-board');
paint.addEventListener('click', colorChange);
function colorChange(event) {
  if (event.target !== paint) {
    event.target.style.backgroundColor = colorSelected;
  }
}

const clearButton = document.querySelector('#clear-board');
const allBoxArray = paint.children;
clearButton.addEventListener('click', clearAll);
function clearAll() {
  for (let i = 0; i < allBoxArray.length; i += 1) {
    allBoxArray[i].style.backgroundColor = 'white';
  }
  // for (let key in allBoxArray) {
  //   allBoxArray[key].style.backgroundColor = 'white';
  // }
}