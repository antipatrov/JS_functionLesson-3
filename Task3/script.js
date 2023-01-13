let number1 = prompt('Введите число 1');
let number2 = prompt('Введите число 2');
let number3 = prompt('Введите число 3');
let max = 0;


function maxValue(number1, number2, number3) {
    if (number1 > number2 & number1 > number3)
        return max = number1;

    if (number2 > number1 & number2 > number3) {
        return max = number2;
    }
    if (number3 > number1 & number3 > number2) {
        return max = number3;
    }

}

console.log(alert(`Максимальное число среди заданных ${maxValue(number1, number2, number3)}`));