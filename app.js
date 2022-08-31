let inputs = document.querySelectorAll('input');
let map = new Map;

let num = 1;
for (let input of inputs) {
    map.set(input, num++);

    input.addEventListener('click', function clickInp() {
        this.value = this.value + map.get(this);

        input.removeEventListener('click', clickInp);
    })
}