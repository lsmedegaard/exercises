window.addEventListener("load", addToArray);

let customArray = [1];

function addToArray() {
  customArray.push(Math.floor(Math.random() * 32));

  console.log(customArray);

  addBar();
}

function addBar() {
  const barChart = document.querySelector("#bar_chart");
  let barDiv = document.createElement("div");
  let div = document.createElement("div");

  div.setAttribute("id", `bar_container_${customArray.length}`);

  div.classList.add("bar_container");
  barDiv.classList.add("bar");

  /* this.style.height = `${customArray.values}vw`; */

  if (customArray.length >= 39) {
    let lastBarContainer = document.querySelector("#bar_chart").firstChild;
    customArray.shift();
    lastBarContainer.remove();
  }

  div.addEventListener("mouseover", showCount);

  div.appendChild(barDiv);
  barChart.appendChild(div);

  let barContainer = document.querySelector(`#bar_chart`).lastChild;
  barContainer.style.height = `${customArray.slice(-1)}vw`;
  console.log(customArray.slice(-1));

  if (customArray.slice(-1) < 10) {
    console.log("customer is under 10");
    barDiv.style.backgroundColor = `yellow`;
  }
  if (customArray.slice(-1) >= 25) {
    console.log("customer is above 25");
    barDiv.style.backgroundColor = `green`;
  }

  if (customArray.slice(-1) >= 30) {
    console.log("customer is full");
    barDiv.classList.add("blinkingAnimation");
  }

  console.log(barContainer);
  console.log(div);
  setTimeout(addToArray, 500);
}

function showCount() {
  let p = document.createElement("p");
  this.appendChild(p);
  this.firstChild.textContent = parseInt(this.style.height);
  this.removeEventListener("mouseover", showCount);
  this.addEventListener("mouseout", hideCount);
  function hideCount() {
    this.firstChild.textContent = ``;
    this.addEventListener("mouseover", showCount);
  }

  console.log("showing amount of customers: " + this.height);
}

/* let customArray = [];
let arrayLength = customArray.length;
function addToArray(){
    console.log(customArray);

    if(customArray.length < 40 ){
       
        console.log("a+ " + arrayLength);
        for(let i=0; i<40; i++){
        customArray.push(Math.floor(Math.random() * 32));
        customArray.shift();
        console.log(customArray);
    }
    }

} */

/* const bar = document.querySelector("#bar_container")

const arrayCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 3.3, 3.4, 3.5, 3.6, 10.5, 15.5, 30.5]

function addToArray() {
console.log("adding new value to array: " +  arrayCount);
arrayCount.push(Math.floor(Math.random() * 32));
arrayCount.shift();
console.log("added to array ");
console.log(arrayCount);
barHandler();
}



function barHandler(){
    console.log(bar)

   const barChart = document.querySelector("#bar_chart");
   
   for(let i =0;i<40;i++){
   let barDiv = document.createElement("div");
   let div = document.createElement("div");
   div.classList.add("bar_container");
   barDiv.classList.add("bar");

   div.appendChild(barDiv);
   barChart.appendChild(div);
   console.log(div)
   }
   
  
   /*  let clone = bar.cloneNode(true);
   barChart.appendChild(clone);
   console.log(clone); */

/*     for(let i=0; i < 40; i++){ 
    bar.style.height =  `${arrayCount[i]}vw`;
    
     } } */
