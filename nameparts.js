"use strict";
 
/* const fullName = "Albus Percival Wulfric Brian Dumbledore";
const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");


let firstName = fullName.substring(0, firstSpace)
let middleName = fullName.substring(firstSpace, lastSpace).trim();
let lastName = fullName.substring(lastSpace).trim();
console.log(lastName)

console.log(`the first name is "${firstName}" and the middlename is "${middleName}" and the last name is "${lastName}"`)
 */
/* const fullName = "Albus Percival Wulfric Brian Dumbledore";
const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");



function getNameParts(fullName) {

    let newFullName = fullName.split(" ")
    let firstName = fullName.substring(0, firstSpace)
    let middleName = fullName.substring(firstSpace, lastSpace).trim();
    let lastName = fullName.substring(lastSpace).trim();

}

getNameParts(); */


function getNameParts(fullName) {
    const firstSpace = fullName.indexOf(" ");
    const lastSpace = fullName.lastIndexOf(" ");
    
    const firstName = fullName.substring(0, firstSpace).trim();
    const middleName = fullName.substring(firstSpace, lastSpace).trim();
    const lastName = fullName.substring(lastSpace).trim();

    if (middleName === "") {
        console.log(`Fornavn er "${firstName}" mellemnavnet er "undefined" og efternavnet er "${lastName}"`)
    } else {
        console.log(`Fornavn er "${firstName}" mellemnavnet er "${middleName}" og efternavnet er "${lastName}"`)
    }

}


console.log(getNameParts("Tony montanta sos"))