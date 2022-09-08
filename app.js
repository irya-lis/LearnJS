function checkNumber(num) {
    if (num > 0) {
        return Math.sqrt(num).toFixed(2);
    } else {
        throw new Error('ошибка взятия корня из числа равного или меньше нуля');
    }
}

try {
    alert(checkNumber(5));
} catch (error) {
    alert('Вы пытаетесь вычислить квадратный корень из число равного или меньше нуля');
}