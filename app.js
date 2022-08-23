let div = document.querySelector('#parent');
let result = document.querySelector('.res');

for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    input.value = ' ';

    input.addEventListener('blur', function () {
        result.textContent += input.value;

    })

    div.appendChild(input);
}