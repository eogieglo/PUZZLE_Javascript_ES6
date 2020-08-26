/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 16_LittleEveryLotSome para ver el resultado en la consola */

let computers = [
    {name:'Apple',ram: 24 },
    {name:'Compaq',ram: 4 },
    {name:'Acer',ram: 32 }
];

let allComputersCanRunProgram = true;

let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
    let computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

console.log('');

let compEvery = computers.every(function(computer){
    return computer.ram > 16;
});

console.log("Every es:");
console.log('---------');
console.log(compEvery);