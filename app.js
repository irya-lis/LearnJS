let elems = document.querySelectorAll('li');
let arr = [];

for (let elem of elems) {
    arr.push(elem.textContent);
}

let json = JSON.stringify(arr);
console.log(json);