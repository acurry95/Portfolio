class canvasButton {
  constructor(a) {
    this.a = a;
    var pixel = document.createElement("div");
    var button = document.createElement("button");
    button.setAttribute("id", "pixel" + a);
    button.classList.add("pixels");
    button.onclick = function() {setColor(a)};
    var row = Math.floor(a / 8);
    if(row % 2 === 0) {
      if(a % 2 === 0) {
        button.style.backgroundColor = "#000";
      }
    } else {
      if(a % 2 != 0) {
        button.style.backgroundColor = "#000";
      }
    }
    pixel.appendChild(button);
    main.appendChild(pixel);
  }
}

class colorButton {
  constructor(color) {
    this.color = color;
    var col = document.createElement("div");
    var colButton = document.createElement("button");
    colButton.classList.add("colorbuttons");
    colButton.style.backgroundColor = color;
    colButton.onclick = function() {changeBrush(color)};
    col.appendChild(colButton);
    colID.appendChild(col);
  }
}

//ON LOAD
var brushColor = "red";
var main = document.getElementById("canvas");
var colID = document.getElementById('colorSelector');
//Add colors here
var colors = ["red", "blue", "green", "yellow", "white", "black", "purple", "brown", "lime", "lightblue", "pink", "aqua", "gold", "grey", "salmon", "darkolivegreen"];
//Build the Canvas
for(var i=0; i<64; i++) {
  new canvasButton(i);
}
//Build the Color Selector
for(var j = 0; j < colors.length; j++) {
  new colorButton(colors[j]);
}


function changeBrush(color) {
  brushColor = color;
}

function setColor(buttonId) {
  document.getElementById("pixel"+buttonId).style.backgroundColor = brushColor;
}
