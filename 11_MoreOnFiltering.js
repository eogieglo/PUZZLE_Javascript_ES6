/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 11_MoreOnFiltering.js para ver el resultado en la consola */

const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
]

// Type is 'vegetable', quantity is greater than 0, price is less than 10

const filter3 = products.filter(function (product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
})
console.log('El resultado del filtro es: ')
console.log('--------------------------')
console.log(filter3)
