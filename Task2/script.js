let number = (prompt('Введите число'));

if (isNaN(number)) {
    alert("Invalid number");
}
let tax = 0.87;
const salary = (number, tax) => {
    return number * tax;
}
console.log(`Размер заработной платы за вычетом налогов равен ${salary(number, tax)} рублей`);