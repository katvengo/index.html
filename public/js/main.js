var i = 0;
var txt = "Hi, I'm a full-stack developer finishing up my 6-month course at UC San Diego Extension Bootcamp. Check out my portfolio to learn more about my projects."
 /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

$(document).ready(function () {
    typeWriter()
})