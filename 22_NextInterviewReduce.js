/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 22_NextInterviewReduce para ver el resultado en la consola */

function balancedParens (string) {
  return string.split('').reduce(function (previous, char) {
    if (char === '(') { return ++previous }
    if (char === ')') { return --previous }
    return previous
  }, [0])
}

console.log(balancedParens(')('))
