// salva a cor selecionada <===
let colorSelected = '';

// cores aleatorias <===
let corRandom1;
let corRandom2;
let corRandom3;

// aponta salva quem esta com a classe 'selected', que sera a cor usada <===
const removeSelected = document.getElementsByClassName('selected');

const blackSelected = document.querySelector('#black');
// define a cor como preto <===
function colorBlack() {
  removeSelected[0].classList.remove('selected');
  colorSelected = 'black';
  blackSelected.classList.add('selected');
}
// seleciona a cor como preto <===
blackSelected.addEventListener('click', colorBlack);

const redSelected = document.querySelector('#red');
/* 
definia a cor como vermelho <===
passou a ser random
 */
function colorRed() {
  removeSelected[0].classList.remove('selected');
  redSelected.classList.add('selected');
  redSelected.style.backgroundColor = 'white';
  colorSelected = corRandom1;
  redSelected.style.backgroundColor = colorSelected;
}
// seleciona a cor como vermelha / random<===
redSelected.addEventListener('click', colorRed);

const blueSelected = document.querySelector('#blue');
/* 
definia a cor como azul <===
passou a ser random
 */
function colorBlue() {
  removeSelected[0].classList.remove('selected');
  blueSelected.classList.add('selected');
  blueSelected.style.backgroundColor = 'white';
  colorSelected = corRandom2;
  blueSelected.style.backgroundColor = colorSelected;
}
// seleciona a cor azul/random <===
blueSelected.addEventListener('click', colorBlue);

const greenSelected = document.querySelector('#green');
/* 
definia a cor como verde <===
passou a ser random
 */
function colorGreen() {
  removeSelected[0].classList.remove('selected');
  greenSelected.classList.add('selected');
  greenSelected.style.backgroundColor = 'white';
  colorSelected = corRandom3;
  greenSelected.style.backgroundColor = colorSelected;
}

// seleciona a cor verde/random <===
greenSelected.addEventListener('click', colorGreen);

// pinta os blocos com a cor selecionada<===
const paint = document.querySelector('#pixel-board');
function colorChange(event) {
  if (event.target !== paint) {
    event.target.style.backgroundColor = colorSelected;
  }
}
paint.addEventListener('click', colorChange);

// chama a funçao para limpar os blocos <===
const clearButton = document.querySelector('#clear-board');
const allBoxArray = paint.children;

// pinta todos os blocos de branco <===
function clearAll() {
  for (let i = 0; i < allBoxArray.length; i += 1) {
    allBoxArray[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearAll);

// numero de blocos colocado no input e sua altura<===
let boardSize = 0;
let blockHeight = 0;

// verifica se o valor input é valido <===
function inputCheque() {
  if (boardSize <= 0) {
    window.alert('Board inválido!');
  }
  if (boardSize < 5) {
    boardSize = 5;
  } if (boardSize > 50) {
    boardSize = 50;
  }
  document.querySelector('#board-size').value = boardSize;
}

// apaga todos os blocos <===
function clearBox() {
  const dellPixel = allBoxArray.length;
  for (let i = 0; i < dellPixel; i += 1) {
    paint.removeChild(allBoxArray[0]);
  }
}

// define o tamanho dos blocos <===
function addBlockBox() {
  if (boardSize <= 15) {
    blockHeight = 40;
  } else if (boardSize > 15 && boardSize <= 30) {
    blockHeight = 25;
  } else {
    blockHeight = 10;
  }
}
// adiciona os blocos <===
function addblockToBox() {
  for (let i = 0; i < (boardSize ** 2); i += 1) {
    const block = document.createElement('div');
    block.classList.add('pixel');
    paint.appendChild(block);
  }
}

// ajusta o tamanho dos blocos <===
function blockAdjust() {
  for (let i = 0; i < paint.children.length; i += 1) {
    paint.children[i].style.height = `${blockHeight}px`;
    paint.children[i].style.width = `${blockHeight}px`;
    paint.children[i].style.display = 'inline-block';
    paint.children[i].style.backgroundColor = 'white';
    paint.children[i].style.border = '1px solid black';
    paint.children[i].style.borderRadius = '10%';
    paint.children[i].style.marginRight = '4px';
  }
  // paint.style.backgroundColor = 'white'; pinta o fundo da tabela de branco apos colocar um valor input<===
}

// ajusta o tamanho do box(container de blocos) maior que 30 <===
function boxAdjustHightNumber() {
  const boxHeight = boardSize * blockHeight + (12.5 * boardSize + (boardSize / 2));
  const boxWidth = boardSize * blockHeight + (6 * boardSize);
  paint.style.height = `${boxHeight}px`;
  paint.style.width = `${boxWidth}px`;
}

// ajusta o tamanho do box (container de blocos) entre 15 e 30 <===
function boxAdjustMidNumber() {
  const boxHeight = boardSize * blockHeight + (6.5 * boardSize + (boardSize / 2));
  const boxWidth = boardSize * blockHeight + (6 * boardSize);
  paint.style.height = `${boxHeight}px`;
  paint.style.width = `${boxWidth}px`;
}

// ajusta o tamanho do box(container de blocos) até 15 <===
function boxAdjust() {
  if (boardSize > 30) {
    boxAdjustHightNumber();
  } else if (boardSize > 15 && boardSize <= 30) {
    boxAdjustMidNumber();
  } else {
    const boxHeight = boardSize * blockHeight + (6 * boardSize + (boardSize / 2));
    const boxWidth = boardSize * blockHeight + (6 * boardSize);
    paint.style.height = `${boxHeight}px`;
    paint.style.width = `${boxWidth}px`;
  }
}

// controlador de funçoes do gerador de box <===
function generateBox() {
  boardSize = Number(document.querySelector('#board-size').value);
  inputCheque();
  clearBox();
  addBlockBox();
  addblockToBox();
  blockAdjust();
  boxAdjust();
}

// chama a funçao para gerar o quadro com o input number <===
const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', generateBox);

// gera uma cor aleatoria <===
function generateArandomColor() {
  let randomColor = Math.floor(Math.random() * 1000);
  if (randomColor < 10) { randomColor *= 100; }
  if (randomColor < 100) {
    randomColor *= 10;
  }
  return `#${randomColor}`;
}

function corRandomGenerate() {
  corRandom1 = generateArandomColor();
  corRandom2 = generateArandomColor();
  corRandom3 = generateArandomColor();
}

// funçoes de cores aleatorias <===
function colorSwap() {
  colorRed();
  colorBlue();
  colorGreen();
  colorBlack();
}
// funçoes a serem carregada pos carregamento <===
window.onload = function () {
  colorSelected = 'black';
  const painting = document.getElementById(colorSelected);
  painting.classList.add('selected');
  corRandomGenerate();
  colorSwap();
};
