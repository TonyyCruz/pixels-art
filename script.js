let colorSelected = '';

window.onload = function() {
  colorSelected = 'black';
};

function colorChange(event) {
  event.target.style.backgoundColor = colorSelected;
}
