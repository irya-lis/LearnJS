let elems = document.querySelectorAll('input');

for(let elem of elems) {
    function func() {
        console.log(this.value);
    }
    func.call(elem);
}

