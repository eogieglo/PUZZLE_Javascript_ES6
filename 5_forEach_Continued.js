/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 5_ForEach_Continued.js para ver el resultado en la consola */

//  Create an array of numbers
const numbers = [1, 2, 3, 4, 5]

//  Create a variable to hold the sum
let sum = 0

function adder (number) {
  sum += number
}

//  Loop over the array, incrementing the sum variable
numbers.forEach(adder)

// Print the sum variable
console.log('El resultado de la suma es: ')
console.log('---------------------------')
console.log(sum)
