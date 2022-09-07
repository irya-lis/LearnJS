let parent = document.querySelector('div');
let users = [
    {
        surname: 'surname1',
        name: 'name1',
        age: 31,
    },
    {
        surname: 'surname2',
        name: 'name2',
        age: 32,
    },
    {
        surname: 'surname3',
        name: 'name3',
        age: 33,
    },
];
// сохранила в локальное хранилище массив:
localStorage.setItem('arr', JSON.stringify(users));


// создала 3 инпута:

let inp1 = document.createElement('input');
inp1.value;
parent.appendChild(inp1);

let inp2 = document.createElement('input');
inp2.value;
parent.appendChild(inp2);

let inp3 = document.createElement('input');
inp3.value;
parent.appendChild(inp3);


// создала кнопку:
let button = document.createElement('button');
button.textContent = 'click';
parent.appendChild(button);


// беру из лок. хр. массив в виде строки (JSON):
let str = localStorage.getItem('arr');

// преобразовываю строку в массив:
let arr = JSON.parse(str);

// вешаю на кнопку событие:
button.addEventListener('click', function () {
    // создаю объект с полями:
    let obj = {
        surname: inp1.value,
        name: inp2.value,
        age: Number(inp3.value)
    }


    //добавила объект в массив:
    arr.push(obj);
    console.log(arr);
    //преобразовала массив в строку:
    localStorage.setItem('arr', JSON.stringify(arr));
})