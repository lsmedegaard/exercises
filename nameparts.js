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
    const firstSpace = str.indexOf(" ")+1

/*     let spaceCheck = str.substring(str.indexOf(" ")+1, str.indexOf(" ")+2, str.lastIndexOf(" ")+3).toUpperCase();
 */
    const firstLetter = str.substring(0,1).toUpperCase("");
    const secondLetter = str.substring(str.indexOf(" ")+1, str.indexOf(" ")+2)
   
    let result = (`${firstLetter}${secondLetter}`);
    console.log(secondLetter)
    
    return result


}
let name = "lasse mark smedegaard"
const cap = capitalize(name);
console.log(cap)




// function til at få forskellige dele af navnet

function getNameParts(fullName) {
    const firstSpace = fullName.indexOf(" ");
    const lastSpace = fullName.lastIndexOf(" ");

    const firstName = fullName.substring(0, firstSpace).trim();
    const middleName = (fullName.substring(firstSpace, lastSpace).trim());
    const lastName = fullName.substring(lastSpace).trim();

    if (middleName === "") {
        let result = (`${firstName} undefined ${lastName}`)
        return result
    } else {
        let result = (`${firstName} ${middleName} ${lastName}`)
        return result
    }
    
    

}

/* const fuldenavn = "lasse mark smedegaard"
const gNameParts = getNameParts(fuldenavn)
console.log(gNameParts) */





/* function fullName(lastName, firstName, middleName) {

    if (middleName === undefined) {
        
        console.log(`${firstName} ${lastName}`)


    }else {
        
        console.log(`${firstName} ${middleName} ${lastName}`)
    }


}

fullName("Potter", "Harry", "James") */