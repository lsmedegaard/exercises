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


function capitalize(str) {
        str = str.substring(0, 1).toLocaleUpperCase() + str.substring(1).toLocaleLowerCase();
        return str;
 }

//     const firstS = str.indexOf(" ")
//     const lastSpace = str.lastIndexOf(" ")


//  */
//     const firstLetter = str.substring(str.indexOf(" ")+1).toUpperCase("");

//     // const secondLetter = str.substring(str.indexOf(" ")+1, str.indexOf(" ")+2)
   


// }
// let name = "lasse mark smedegaard"
// const cap = capitalize(name);
// console.log(cap)




// function til at få forskellige dele af navnet

function getNameParts(fullName) {
    if (fullName.split(" ").length > 2) {
        firstName = fullName.substring(0, fullName.indexOf(" ")).trim();
        middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim();
        lastName = fullName.slice(fullName.lastIndexOf(" "), fullName.length).trim();
    } 
    if (fullName.split(" ").length === 2) {
        middleName = null
        firstName = fullName.substring(0, fullName.indexOf(" ")).trim();
        lastName = fullName.slice(fullName.lastIndexOf(" "), fullName.length).trim();
    }
    firstName = capitalize(firstName);
    middleName = capitalize(middleName);
    lastName = capitalize(lastName);

    let cleanName = { firstName, middleName, lastName };

    return cleanName;

}

const rString = "lasse mark smedegaard"
const gNameParts = getNameParts(rString)
console.log(gNameParts)





/* function fullName(lastName, firstName, middleName) {

    if (middleName === undefined) {
        
        console.log(`${firstName} ${lastName}`)


    }else {
        
        console.log(`${firstName} ${middleName} ${lastName}`)
    }


}

fullName("Potter", "Harry", "James") */