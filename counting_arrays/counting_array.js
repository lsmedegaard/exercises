//'use strict'

window.addEventListener("load", addToArray);
const timeArray = [];
let counter = 0;

function addToArray(){
counter++;
timeArray.push(counter);
//console.log("(" + counter + ") " + "[" + timeArray + "]");
console.log(timeArray);
if(counter < 9){
    setTimeout(addToArray, 1000); 
}
};

// function addToArray(){
//     for(let i = 0; i < 10; i++) {
//         setTimeout(() => {     
//           counter++;
//           console.log("count: " + counter);
//         }, 1000);
//       };
// };

