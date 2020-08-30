/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 19_EverySome_Practice para ver el resultado en la consola */

function Field (value) {
  this.value = value
};

Field.prototype.validate = function () {
  return this.value.length > 0
}

const username = new Field('2cool')
const password = new Field('my_password')
const birthdate = new Field('10/10/2010')
const fields = [username, password, birthdate]

const resultEvery = fields.every(function (field) {
  return field.validate
})

console.log('')
console.log('El resultado de Every es: ')
console.log(resultEvery)

// Declara en el video otra variable para Validar un Form

const formValid = fields.every(function (field) {
  return field.validate
})

if (formValid) {
// Allow user to submit!
} else {
  // Show an error message
};
