let start = document.querySelector('#start');
let result = document.querySelector('.res');


start.addEventListener('click', function clickButton() {

    let count = 0;

    let timerId = setInterval(function () {
        result.textContent += ++count;

        if(count >= 10) {
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', clickButton);
})