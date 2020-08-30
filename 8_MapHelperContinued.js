/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 8_MapHelperContinued.js para ver el resultado en la consola */

const cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
]

const prices = cars.map(function (car) {
  return car.price
})

console.log('Precios')
console.log(prices)
console.log('---------')
const prices2 = JSON.stringify(prices)
console.log('Precios convertidos')
console.log(prices2)
