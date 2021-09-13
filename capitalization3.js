/* const navn = "frederik"



const findMidten = navn.substring(2, 3).toUpperCase("");
const foersteDel = navn.substring(0, 2).toLowerCase("");
const andenDel = navn.substring(3).toLowerCase("");

console.log(`${navn} bliver til ${foersteDel}${findMidten}${andenDel}`)

 */

/* const navn = "lasse"

const firstLetter = navn.substring(0,1).toUpperCase("");
const lastSpace = navn.substring(1).toLowerCase("");

console.log(`${navn} bliver til ${firstLetter}${lastSpace}`)

 */


function capitalize(str) {
    const firstLetter = str.substring(0,1).toUpperCase("");
    const lastSpace = str.substring(1).toLowerCase("");

    console.log(`${firstLetter}${lastSpace}`);

}
capitalize("lASSe");






