/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 13_QueryingForRecordsFind.js para ver el resultado en la consola */

const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
]

let user

for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i]
    break
  }
}

console.log('El user es: ')
console.log('-----------')
console.log(user)

console.log('')

const find1 = users.find(function (user) {
  return user.name === 'Alex'
})

console.log('El find metodo nos da el usuario:')
console.log('-------------------')
console.log(find1)
