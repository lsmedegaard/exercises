"use strict";
 
const fullName = "Albus Percival Wulfric Brian Dumbledore";
const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");


let firstName = fullName.substring(0, firstSpace)
let middleName = fullName.substring(firstSpace, lastSpace).trim();
let lastName = fullName.substring(lastSpace).trim();
console.log(lastName)

console.log(`the first name is "${firstName}" and the middlename is "${middleName}" and the last name is "${lastName}"`)


