let a = prompt('Введите число А');

function cubing(a) {
    return a ** 3;

}
let b = prompt('Введите число Б');
cubing(b);
console.log(`Number: ${cubing(a)}+${cubing(b)}`);