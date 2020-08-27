/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 16_LittleEveryLotSome para ver el resultado en la consola */

let names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

let every = names.every(function(name){
    return name.length > 4;
});
console.log('');
console.log('El resultado de every es: ');
console.log('-------------------------');
console.log(every);

let some = names.some(function(name){
    return name.length > 4;
});
console.log('');
console.log('El resultado de some es: ');
console.log('-------------------------');
console.log(some);
