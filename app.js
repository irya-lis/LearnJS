let ol = document.querySelector('#elem');
let button = document.querySelector('#button');
let input = document.querySelector('#inp');


button.addEventListener('click', function () {

    let li = document.createElement('li');
    li.textContent = input.value;
    ol.appendChild(li);
    input.value = ' ';
})