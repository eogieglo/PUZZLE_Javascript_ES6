/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 21_TouchMoreReduce para ver el resultado en la consola */

const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
]

const color = primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color)

  return previous
}, [])

console.log('El array es: ')
console.log('')
console.log(color)
