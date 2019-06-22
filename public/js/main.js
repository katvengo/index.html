var i = 0;
var txt = "Full-Stack Web Developer located in San Diego, CA. Will be availble for work after finishing up UCSD Extension Bootcamp August, 8th 2019"
/* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
function animateCSS(element, animationName, callback) {

    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

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

animateCSS('.languageAnimation', 'fadeInUp')
animateCSS('.image-icons', 'fadeInUp')
animateCSS('#image-IconTwo', 'fadeInUp')
animateCSS('#image-iconThree', 'fadeInUp')
animateCSS('#image-iconsNode', 'fadeInUp')
animateCSS('#image-iconsSQL', 'fadeInUp')