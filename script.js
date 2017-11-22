var resetButton = document.getElementById("reset-button");

var colors = [];
for (var i = 0; i < 10; i++) {
  colors.push('square-' + i);
}

function GameSquare(el, color) {
  this.el = el;
  this.isOpen = false;
  this.isLocked = false;
  this.el.addEventListener("click", this, false);
}

