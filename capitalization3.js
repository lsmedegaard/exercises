// /* const navn = "frederik"



// const findMidten = navn.substring(2, 3).toUpperCase("");
// const foersteDel = navn.substring(0, 2).toLowerCase("");
// const andenDel = navn.substring(3).toLowerCase("");

// console.log(`${navn} bliver til ${foersteDel}${findMidten}${andenDel}`)

//  */

// /* const navn = "lasse"

// const firstLetter = navn.substring(0,1).toUpperCase("");
// const lastSpace = navn.substring(1).toLowerCase("");

// console.log(`${navn} bliver til ${firstLetter}${lastSpace}`)

//  */


// function capitalize(str) {


//     const firstLetter = str.substring(0,1).toUpperCase("");
//     const rest = str.substring(1, str.indexOf(" ")).toLowerCase("");

//     const secondFirstChar = str.substring(str.indexOf(" ")+1, str.indexOf(" ")+2).toUpperCase("")
//     const rest1 = str.substring(str.indexOf(" ")+2).toLowerCase("");

//     const thirdFirstChar = str.substring(str.lastIndexOf(" ")+1).toUpperCase("");



//     let result =(`${firstLetter}${rest} ${secondFirstChar}${rest1}`);
//     console.log(rest1)
//     return result


// }

// const name = "lasse mark smedegaard"
// const cap = capitalize(name)
// console.log(cap)






function capitalize(str) {
  str = str.substring(0, 1).toLocaleUpperCase() + str.substring(1).toLocaleLowerCase();
  return str;
}

function getNameParts(fullName) {
  if (fullName.split(" ").length > 2) {
    console.log("there is a middle name");
    firstName = fullName.substring(0, fullName.indexOf(" ")).trim();
    middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim();
    lastName = fullName.slice(fullName.lastIndexOf(" "), fullName.length).trim();
  }
  if (fullName.split(" ").length === 2) {
    console.log("no middle name");
    middleName = null;
    firstName = fullName.substring(0, fullName.indexOf(" ")).trim();
    lastName = fullName.slice(fullName.indexOf(" "), fullName.length).trim();
  }

  firstName = capitalize(firstName);
  middleName = capitalize(middleName);
  lastName = capitalize(lastName);

  let sortedFullname = { firstName, middleName, lastName };
  /* console.log(first name: ${firstName}\nmiddle name: ${middleName}\nlast name : ${lastName});
   /
  / console.log({ firstName, middleName, lastName }); */
  return sortedFullname;
}


let navn = "tony harakat montana"
let cap = getNameParts(navn)
console.log(cap)


