// passing _the _context _as _a _parameter
let elem = document.querySelector('#elem');

elem.addEventListener('click', function clickButton() {
    let timerId = setInterval(func, 1000, this);


    function func(self) {
        elem.value = Number(self.value) - 1;
        if (elem.value <= 0) {
            clearInterval(timerId);
        }
    }


    elem.removeEventListener('click', clickButton);

})