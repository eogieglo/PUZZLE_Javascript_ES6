/* Nombre con numeros los archivos Js para que se corresponda con los numeros de videos

--- EJECUTAR node 25_ReachTemplateString.js para ver el resultado en la consola */

//PHP
//
// $data ='{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{ "device_id": "${device_id}", "guid": "${guid}", "username": "${username}"," }`;

console.log(data);

// Otro ejercicio del mismo video

const year = 2016;
const yearmessage = `The year is ${year}`;

console.log(yearmessage);