/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 10_SelectingNeededDataFilter para ver el resultado en la consola */

let products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];

let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if(products[i].type  === 'fruit'){
        filteredProducts.push(products[i]);
    }
}
console.log('');
console.log('El filtro de fruit es: ');
console.log('----------------------');
console.log(filteredProducts.length);

console.log('');

console.log('El filtro es: ');
console.log('----------------------');
let filter2 = JSON.stringify(filteredProducts)
console.log(filter2);

console.log('');
console.log('El filtro de vegetable es: ');
console.log('----------------------');
let filter3 = products.filter(function(product) {
     return product.type === 'vegetable';
})

console.log(filter3);