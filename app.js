let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let timerId;
let count = 10;


start.addEventListener('click', function clickStartButton() {
    timerId = setInterval(function () {
        console.log(count--);

        if (count < 0) {
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', clickStartButton)
})


stop.addEventListener('click', function () {
    clearInterval(timerId);

    if (count < 0) {
        setInterval(timerId);
    }
})
