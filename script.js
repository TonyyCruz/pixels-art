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
}

// let boardSize = document.querySelector('#board-size').value;
const boxFlex = document.querySelector('#board-box-flex');
const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', makeBox)

function makeBox() {
  let boardSize = document.querySelector('#board-size').value;
  if (boardSize === '' || boardSize < 5 || boardSize > 50) {
    window.alert('Board inválido!');
  } else {
    for (let i = 0; i < (boardSize ** 2); i += 1) {
      let block = document.createElement('div');
      block.classList.add('block');
      boxFlex.appendChild(block);
    }
    boxDesign(boardSize);
  }
}
const boxFlexFather = document.querySelector('#board-box-flex');
function boxDesign(boardSize) {
let block = boxFlexFather.children;
let blocksize = (249 - (5 * boardSize)) / boardSize;
console.log(boardSize);
console.log(blocksize);
  for (let i = 0; i < block.length; i += 1) {
    block[i].style.border = '1px solid black';
    block[i].style.height = `${blocksize}px`;
    block[i].style.width = `${blocksize}px`;
    block[i].style.backgroundColor = 'white';
    block[i].style.display = 'inline-block';
    block[i].style.margin = '0px 2px';
  }
}
