var i = 0; //variable for testing length of introText
var introText = "Hello\xa0my\xa0name\xa0is\xa0Aric!"; //Header text to be typed out on load
var speed = 80; //Speed of animation\
var image = document.getElementById("ourimage").clientWidth;
console.log(image);

window.addEventListener("load", typeHeader); //loads header text

//function for typing out text animation
function typeHeader() {
  if(i < introText.length) {
    var letter = document.createTextNode(introText.charAt(i));
    var span = document.createElement("div");
    span.appendChild(letter);
    span.classList.add('headSpan');
    document.getElementById("headtext").appendChild(span);
    i++;
    setTimeout(typeHeader, speed);
  }
}
