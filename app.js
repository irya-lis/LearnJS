let res = document.querySelector('.res');

let value = Number(localStorage.getItem('key')) + 1;
localStorage.setItem('key', value.toString());
res.textContent += 'Эту страницу смотрели ' + value + ' раз.';


if (value === 10) {
    localStorage.removeItem('key');
}