/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 12_ChoosingWhentoFilter.js para ver el resultado en la consola */

const post = { id: 4, title: 'New Post' }
const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
]

function commentsForPost (post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id
  })
}
console.log('Los post y comentarios son:')
console.log('----------------------------')
console.log(commentsForPost(post, comments))
