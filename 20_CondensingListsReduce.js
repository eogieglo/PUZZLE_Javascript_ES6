/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 20_CondensingListsReduce para ver el resultado en la consola */

let numbers = [ 10,20,30 ];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
};
console.log('');
console.log('El resultado de sumar el array es:');
console.log('');
console.log(sum);
console.log('');

let resultSum = numbers.reduce(function(sum, number){
    return sum + number;
});
console.log('');
console.log('El resultado de sumar el array y el numero es:');
console.log('');
console.log(resultSum);
console.log('');