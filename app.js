let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function() {
    timerId = setInterval(function() {
        let data = new Date;
        console.log(data.getMinutes() + ':' + data.getSeconds());
    }, 1000);
})

stop.addEventListener('click', function() {
    clearInterval(timerId);
})