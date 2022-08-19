let start = document.querySelector('#start');
let stop = document.querySelector('#stop');


let timerId;
let count = 0;

start.addEventListener('click', function () {

    timerId = setInterval(function () {
        console.log(count++);
    }, 1000);
})


stop.addEventListener('click', function () {
    clearInterval(timerId);
})





















