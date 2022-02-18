//salva a cor selecionada <===
let colorSelected = '';

//quando carrega a pagina define a cor selecionada como preto <===
window.onload = function () {
  colorSelected = 'black';
  const painting = document.getElementById(colorSelected);
  painting.classList.add('selected');
};

//aponta salva quem esta com a classe 'selected', que sera a cor usada <===
const removeSelected = document.getElementsByClassName('selected');


//define a cor como preto <===
function colorBlack() {
  removeSelected[0].classList.remove('selected');
  colorSelected = 'black';
  blackSelected.classList.add('selected');
}

//seleciona a cor como preto <===
const blackSelected = document.querySelector('#black');
blackSelected.addEventListener('click', colorBlack);

//define a cor como vermelho <===
function colorRed() {
  removeSelected[0].classList.remove('selected');
  redSelected.classList.add('selected');
  colorSelected = 'red';
}

//seleciona a cor como vermelho <===
const redSelected = document.querySelector('#red');
redSelected.addEventListener('click', colorRed);

//define a cor como azul <===
function colorblue() {
  removeSelected[0].classList.remove('selected');
  blueSelected.classList.add('selected');
  colorSelected = 'blue';
}

//seleciona a cor azul <===
const blueSelected = document.querySelector('#blue');
blueSelected.addEventListener('click', colorblue);

//define a cor como verde
function colorgreen() {
  removeSelected[0].classList.remove('selected');
  greenSelected.classList.add('selected');
  colorSelected = 'green';
}

//seleciona a cor verde <===
const greenSelected = document.querySelector('#green');
greenSelected.addEventListener('click', colorgreen);

//pinta os blocos com a cor selecionada<===
const paint = document.querySelector('#pixel-board');
paint.addEventListener('click', colorChange);
function colorChange(event) {
  if (event.target !== paint) {
    event.target.style.backgroundColor = colorSelected;
  }
}

//chama a funçao para limpar os blocos <===
const clearButton = document.querySelector('#clear-board');
const allBoxArray = paint.children;
clearButton.addEventListener('click', clearAll);

//pinta todos os blocos de branco <===
function clearAll() {
  for (let i = 0; i < allBoxArray.length; i += 1) {
    allBoxArray[i].style.backgroundColor = 'white';
  }
}

//numero de blocos colocado no input e sua altura<===
let boardSize = 0;
let blockHeight = 0;

//apaga todos os blocos <===
function  clearBox() {
  let dellPixel = allBoxArray.length;
  for (let i = 0; i < dellPixel; i += 1) {
    paint.removeChild(allBoxArray[0])
  }
}

//define o tamanho dos blocos <===
function addBlockBox() {
  if (boardSize <= 15) {
    blockHeight = 40; }
    else if ( boardSize > 15 && boardSize <= 30) {
      blockHeight = 25; }
      else { blockHeight = 10;
  }
}
//adiciona os blocos <===
function addblockToBox() {
  for (let i = 0; i < (boardSize ** 2); i += 1) {
    let block = document.createElement('div');
    paint.appendChild(block);
  }
}

//ajusta o tamanho dos blocos <===
function blockAdjust() {
  for (let i = 0; i < paint.children.length; i += 1) {
    paint.children[i].style.height = `${blockHeight}px`;
    paint.children[i].style.width = `${blockHeight}px`;
    paint.children[i].style.display = 'inline-block';
    paint.children[i].style.backgroundColor = 'white';
    paint.children[i].style.border = '1px solid black'
    paint.children[i].style.borderRadius = '10%'
    paint.children[i].style.marginRight = '4px';
  }
}

//ajusta o tamanho do box(container de blocos) maior que 30 <===
function boxAdjustHightNumber() {
  let boxHeight = boardSize * blockHeight + (12 * boardSize + (boardSize / 2));
  let boxWidth = boardSize * blockHeight + (6 * boardSize);
  paint.style.height = `${boxHeight}px`
  paint.style.width = `${boxWidth}px`
}

//ajusta o tamanho do box(container de blocos) até 30 <===
function boxAdjust() {
  if (boardSize > 30) { boxAdjustHightNumber() }
  else {
    let boxHeight = boardSize * blockHeight + (6 * boardSize + (boardSize / 2));
    let boxWidth = boardSize * blockHeight + (6 * boardSize);
    paint.style.height = `${boxHeight}px`
    paint.style.width = `${boxWidth}px`
  }
}

//verifica se o valor input é valido <===
function inputCheque() {
  if (boardSize === '') {
    window.alert('')
  }
}

function generateBox() {
boardSize = Number(document.querySelector('#board-size').value);
inputCheque();
  clearBox();
  addBlockBox();
  addblockToBox();
  blockAdjust();
  boxAdjust();
}

//chama a funçao para gerar o quadro com o input number <===
const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', generateBox);

