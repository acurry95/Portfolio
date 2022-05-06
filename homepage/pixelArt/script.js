//creates a canvas button with an index
function canvasButton(index) {
    return(`
    <div>
        <button 
            id='pixel${index}'
            onclick='setColor(${index})'>
        </button>
    </div>
    `);
}

//creates a color palette button for setting brush color
function colorButton(color) {
    return (`
    <div>
        <button 
            style='background-color:${color}'
            onclick='changeBrush("${color}")'>
        </button>
    </div>
    `);
}
var brushColor="red";
var main = document.getElementById("canvas");
var colorSelector = document.getElementById('colorSelector');
var colors = ["white", "yellow", "orange", "red", "magenta", "purple", "blue", "cyan", "green", "darkgreen", "brown", "tan", "lightgrey", "grey", "#444", "black"];

//build the pixel canvas and color selector palette
for(var i=0; i<64; i++) {
    main.innerHTML += canvasButton(i);
}
for(var j = 0; j < colors.length; j++) {
    colorSelector.innerHTML += colorButton(colors[j]);
}

function changeBrush(color) {
    brushColor = color;
}
function setColor(buttonId) {
    var pxl = document.getElementById("pixel"+buttonId);
    pxl.style.backgroundColor = brushColor;
    pxl.style.border='none';
}
