/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 7_TheMapHelper.js para ver el resultado en la consola */

let numbers = [1,2,3];
let doubledNumbers = [];

console.log(numbers.length);
console.log(numbers.length);

for (let i =0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2); 
}


console.log('El array es: ');
console.log('------------');
console.log(doubledNumbers);


let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log('El array usando map es: ');
console.log('-----------------------');
console.log(doubled);