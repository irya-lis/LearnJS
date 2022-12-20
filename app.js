const button = document.getElementById('myBtn');
const spoiler = document.getElementById('spoiler');

button.addEventListener('click', handleClick);

function handleClick() {
    if (spoiler.classList.contains('closed')) {
        openSpoiler();
    } else {
        closedSpoiler();
    }
}


function openSpoiler() {
    spoiler.classList.remove('closed');
    document.addEventListener("keyup", handleEsc);

}

function closedSpoiler() {
    spoiler.classList.add('closed');
    document.removeEventListener("keyup", handleEsc);

}

function handleEsc(event) {
    if (event.key === "Escape") {
        closedSpoiler();
    }
}