let ol = document.querySelector('#elem');
let addElem = document.querySelector('#button');
let input = document.querySelector('#inp');


addElem.addEventListener('click', function addElement() {

    let li = document.createElement('li');
    li.textContent = input.value;
    ol.appendChild(li);
    input.value = ' ';

    let button = document.createElement('button');
    button.textContent = 'delete';
    ol.appendChild(button);
    button.classList.add('close');

    button.addEventListener('click', function () {
        li.remove();
        button.remove();
    })


    li.addEventListener('click', function addInput() {
        let inp = document.createElement('input');
        inp.value = li.textContent;
        li.textContent = '';
        li.appendChild(inp);

        inp.addEventListener('blur', function () {
            li.textContent = this.value;
            li.addEventListener('click', addInput);
        })

        li.removeEventListener('click', addInput);
    })
})

































