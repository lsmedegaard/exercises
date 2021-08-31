"use strict";

/* const longline = "A very, very very, very, VERY! long line of text,\
that spans across the width og the editior "

const navn = "Lasse Smedegaard";
const animalType = "dog";
const animalName = "Wilma";

const text = `My name is ${navn}.
i have a ${animalType} called ${animalName}`

console.log(text);


const len = navn.length;

console.log(`${navn} is ${len} characters long`);

const letter = navn[2];

console.log(`the first letter of  ${navn} is ${letter} `) */

/* const navn = "Albus Percival Wulfric Brian Dumbledore";
const total = navn.length
const index = navn[29];

console.log(`Total number of characters is: ${total}`)
console.log(index)



//1 = 39
//2 = b
//3 = P
//4 = 29
//5 = 38


const str1 = "  There is    space here \n  "
const str2 = str1.trim();
console.log(str2);
console.log(`_${str2}_`);

const fullName ="Lasse Mark Smedegaard"
const firstName = fullName.substring(0, 6);
const lastName = fullName.substring(11);

console.log(`_${firstName}_`)
console.log(`last name is _${lastName}_`); */


/* const navn = "Albus Percival Wulfric Brian Dumbledore";
const firstName = navn.substring(0, 5);
const lastName = navn.substring(29);
const middleName = navn.substring(14, 23);
const randomCharactersInNavn = navn.substring(25, 28);


console.log(firstName);
 */
// 1 = (0, 5)
// 2 = (29)
// 3 = (15, 22)
// 4 = (14, 23)
// 5 = (25, 28)
// 6 = (2, 5)


const navn = "peter"


function resultat () {
    const findT = navn.substring(2, 3).toUpperCase("");
    const foersteDel = navn.substring(0, 2);
    const andenDel = navn.substring(3, 5);

    const resultatet = (`${foersteDel}${findT}${andenDel}`)
    console.log(resultatet)

}

resultat(navn)



