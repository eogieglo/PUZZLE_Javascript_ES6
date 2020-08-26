// EJECUTAR node 1_HowToTakeThisCurse.js para ver el resultado en la consola

let number = 5000;
let greeting = { hello: number };

let result = number / 20;
console.log(result);    

let resultTwo = number / 50;
console.log(resultTwo);

console.log('Your number is: ' + number);

let greeting2 = JSON.stringify(greeting);
console.log(greeting2);