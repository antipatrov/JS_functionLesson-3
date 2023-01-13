const sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}
console.log(sum(3, 6));

const diff = (firstNumber, secondNumber) => {
    if (firstNumber === secondNumber) {
        return 0;
    }

    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber;
    } else {
        return secondNumber - firstNumber;
    }

}
console.log(diff(6, 6));

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}
console.log(multiply(5, 8));

const quotient = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}
console.log(quotient(4, 8));