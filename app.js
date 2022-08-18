let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');


let count = 4;
div.addEventListener('click', function(event) {
    if(event.target.tagName === 'DIV') {
        console.log('click of div');
    }
    if(event.target.tagName === 'UL') {
        let li = document.createElement('li');
        li.textContent += count++;
        ul.appendChild(li);
    }
    if(event.target.tagName === 'LI') {
        event.target.textContent += " !!! ";
    }
})