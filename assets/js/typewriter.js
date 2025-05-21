//makes text appear as if being typed out

var i = 0;
var txt = "Hey There! Nice to meet you, I'm Dan.";
var txt_abt = "Thanks for that! My name is Dan and I'm a software engineer/game developer.";
var speed = 60;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriterAbout() {
    if (i < txt_abt.length) {
      document.getElementById("typewriteAbout").innerHTML += txt_abt.charAt(i);
      i++;
      setTimeout(typeWriterAbout, 20);
    }
  }