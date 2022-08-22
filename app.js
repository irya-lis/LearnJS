let paragraph = document.querySelector('.res');

function setColor1() {
    paragraph.style.backgroundColor = ' #a0a0c6';
    window.setTimeout(setColor2, 1000);
}

function setColor2() {
    paragraph.style.backgroundColor = '#aaf6f2';
    window.setTimeout(setColor1, 1000);
}

window.onload = setColor1;