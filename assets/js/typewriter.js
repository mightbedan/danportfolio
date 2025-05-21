//makes text appear as if being typed out

var i = 0;
var txt = "Hey There! Nice to meet you, I'm Dan.";
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}