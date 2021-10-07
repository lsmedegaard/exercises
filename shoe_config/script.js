"use strict";

document.addEventListener("DOMContentLoaded", start);
let elementsToPaint = []


async function start() {
    let response = await fetch("shoeSVG.svg")
    let svgData = await response.text();
    document.querySelector("section").innerHTML = svgData;
    manipulateSVG();
}

function manipulateSVG() {
    document.querySelectorAll("svg path").forEach(element => {
        element.style.fill = 'rgba(0, 0, 0, 0)'
        element.addEventListener("mouseover", mouseOver)
        element.addEventListener("mouseout", mouseOut)
        element.addEventListener("click", pickPart)

    })
}

function mouseOver (event) {
    event.target.style.fill = "rgba(0, 255, 0, 0.1)"
    if(event.currentTarget.id === "sole"){
        document.querySelectorAll("#sole").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } else if(event.currentTarget.id === "LOGO"){
        document.querySelectorAll("#LOGO").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
        
    } else if(event.currentTarget.id === "backlayer"){
        document.querySelectorAll("#backlayer").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } else if(event.currentTarget.id === "shoelace"){
        document.querySelectorAll("#shoelace").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } else if(event.currentTarget.id === "frontLayer"){
        document.querySelectorAll("#frontLayer").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } else if(event.currentTarget.id === "ribbon"){
        document.querySelectorAll("#ribbon").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } else if(event.currentTarget.id === "ribbonTag"){
        document.querySelectorAll("#ribbonTag").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } else if(event.currentTarget.id === "topSole"){
        document.querySelectorAll("#topSole").forEach(element => {
            element.style.fill = "rgba(0, 255, 0, 0.1)"
        })
    } 
        
    
}

function mouseOut () {
    // elementsToPaint = event.Target
    // elementsToPaint.includes(event.target) ? event.target.style.fill = "darkgrey" : event.target.style.fill = 'rgba(0, 0, 0 , 0)'
    // // if (elementsToPaint.id){
        document.querySelectorAll("svg path").forEach(element => {
            if (!elementsToPaint.includes(element)) element.style.fill = "rgba(0, 0, 0 , 0)"
        })

        // if (event.currentTarget.id === "LOGO"){
        //     console.log("lol")
        //     document.querySelectorAll("#LOGO").forEach(element => {
        //         element.style.fill = "darkgrey"
        //     })
        // }

}

function pickPart (event) {
    const elements = document.querySelectorAll(`#${event.target.id}`)
    elementsToPaint.push(...elements)
    console.log("elementstopaint", elementsToPaint)
    // elementsToPaint = event.target
    // console.log("elementsToPaint", elementsToPaint)
    // pointer.querySelector(...pointer.id).forEach(element =>
    // pointer.querySelectorAll("#LOGO").forEach(element => elementsToPaint.push(element))
    // if (event.target.id === "LOGO"){
    //     document.querySelectorAll("#LOGO").forEach(elementsToPaint => {
    //         elementsToPaint.push(event.target)
    //     })

    // }
    // elementsToPaint.push(event.target)
    // console.log(elementsToPaint[elementsToPaint.length-1])
    
    // if(elementsToPaint[elementsToPaint.length-1].id === "LOGO"){
    //     console.log("logo click")
    //     document.querySelectorAll("#LOGO").forEach(element => {
    //         element.style.fill = "rgba(0, 200, 0, 0.1)"
    //     })
    // }

    // if (elementsToPaint.length === 0) {
    //     console.log("lololol")
    //     elementsToPaint.style.fill = "darkgrey"
    // }
}

// function pickPart(event) {
//     elementToPaint = event.currentTarget
//     console.log(elementToPaint.id, "element to paint")
//     elementToPaint.style.fill = 'grey'
    
// }