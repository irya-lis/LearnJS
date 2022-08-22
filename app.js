let input = document.querySelector('#inp');
let button = document.querySelector('#btn');
let result = document.querySelector('.res');

button.addEventListener('click', function clickButton() {

    result.textContent += input.value;

    let timerId = setInterval(function () {
        result.textContent = Number(result.textContent) - 1;

        if (result.textContent <= 0) {
            clearInterval(timerId);
        }
    }, 1000);

    button.removeEventListener('click', clickButton);

})