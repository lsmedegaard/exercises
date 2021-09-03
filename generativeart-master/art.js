"use strict";

for (let i = 100; i<320; i+=20){
    console.log(i);
    const artwork1 = document.querySelector("#artwork1");
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = i + "px";
    box.style.height = i + "px";
    artwork1.appendChild(box);
}




for (let i=0; i<90; i+=10){
    const artwork2 = document.querySelector("#artwork2");
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = (`rotate(${i}deg`);
    artwork2.appendChild(box)

}


for (let a = 0; a<200; a+=10){
    console.log(a);
    const artwork3 = document.querySelector("#artwork3");
    let circle = document.createElement("div");
    circle.classList.add("circle");  
    circle.style.width = `${a}px`
    circle.style.height = `${a}px`
    artwork3.appendChild(circle);
}


for (let i =-90; i<200; i+=20){
    console.log(i)
    const artwork4 = document.querySelector("#artwork4");
    let box = document.createElement("div")
    box.classList.add("box");
    box.style.transform = `translate(${i}px, ${i}px)`
    artwork4.appendChild(box);

}



for (let i=1; i<512; i*=2){
    console.log(i)
    const artwork5 = document.querySelector("#artwork5");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
    artwork5.appendChild(circle);
}

for (let i=-20; i<45; i+=5){
    const artwork6 = document.querySelector("#artwork6");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.transform = `translateX(${i-50}px)`;
    circle.style.transform = `rotate(${i*4}deg)`;
    artwork6.appendChild(circle);

}

for (let i=0; i<200; i+=10){
    const artwork7 = document.querySelector("#artwork7");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = `${i}px`;
    circle.style.height = `${i}px`;
    circle.style.transform = `translate(${i}px, ${i/2}px)`;
    artwork7.appendChild(circle);
}



for (let i=50; i<200; i+=10){
    console.log(i)
    const artwork8 = document.querySelector("#artwork8");
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    box.style.transform = `translateX(${i/2}px)`;
    box.style.transform = `rotate(${i}deg)`;
    artwork8.appendChild(box);
}

for (let i=50; i<200; i+=30){
    console.log(i)
    const artwork9 = document.querySelector("#artwork9");
    let box = document.createElement("div");
    let circle = document.createElement("div");
    box.classList.add("box");
    circle.classList.add("circle");
    box.style.width = `${i}px`;
    box.style.height = `${i}px`;
    circle.style.widht = `${i}px`;
    circle.style.height = `${i}px`;
    artwork9.appendChild(box);
    artwork9.appendChild(circle);

}
