let list = document.querySelector('ul');
let items = list.querySelectorAll('li');
let button = document.querySelector('#btn');


for (let item of items) {
    list.addEventListener('click', function (event) {
        let li = event.target.closest('li');

        if (li) {
            li.innerHTML += ' !!!';
        }
    })
}

button.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerHTML += '<li>item <i>italic</i> item</li>'
    list.appendChild(item);
})