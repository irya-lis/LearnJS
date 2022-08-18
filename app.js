'use strict';

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    alert(square(this)) ;


    function square(param) {
        return param.value * param.value;
    }
}