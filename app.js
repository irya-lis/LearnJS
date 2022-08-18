let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);

function func() {
    console.log(this.value);
}