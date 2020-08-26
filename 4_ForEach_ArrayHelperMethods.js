/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 4_ForEach_ArrayHelperMethods.js para ver el resultado en la consola */

let colors = ['red','blue','green'];


console.log('Usando for: ');
console.log('-----------');
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('');

console.log('Usando forEach: ');
console.log('---------------');
colors.forEach(function(color){
    console.log(color);
})