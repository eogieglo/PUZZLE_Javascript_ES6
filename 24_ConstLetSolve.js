/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 24_ConstLetSolve.js para ver el resultado en la consola */

function count(targetString){
    const characters = ['a','e','i','o','u'];
    let number = 0;

    for (let i = 0; i < targetString.length; i++){
        if (characters.includes(targetString[i])) {
            number++;
        }
    
        return number;
    }
}

count('aeipuepeppeaeiou');