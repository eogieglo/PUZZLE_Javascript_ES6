/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 14_FindContinued.js para ver el resultado en la consola */

function Car (model) {
  this.model = model
}

const cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
]

const filterFocus = cars.find(function (car) {
  return car.model === 'Focus'
})

console.log('El resultado del filtro es: ')
console.log('--------------------------- ')
console.log(filterFocus)
console.log('')

// En el video Borra el codigo y empieza con uno nuevo

const posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
]

const comment = { postId: 1, content: 'Great Post' }

function postForComment (posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId
  })
}

console.log('El post comentario es: ')
console.log('-----------------')
console.log(postForComment(posts, comment))
