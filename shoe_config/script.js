"use strict";

document.addEventListener("DOMContentLoaded", start);
let elementsToPaint = [];

async function start() {
  let response = await fetch("shoeSVG.svg");
  let svgData = await response.text();
  document.querySelector("section").innerHTML = svgData;
  manipulateSVG();
}

function manipulateSVG() {
  document.querySelectorAll("svg path").forEach((element) => {
    element.style.fill = "rgba(0, 0, 0, 0)";
    element.addEventListener("mouseover", mouseOver);
    element.addEventListener("mouseout", mouseOut);
    element.addEventListener("click", pickPart);
  });
}

function mouseOver(event) {
  event.target.style.fill = "rgba(0, 255, 0, 0.1)";
  if (event.currentTarget.id === "sole") {
    document.querySelectorAll("#sole").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "LOGO") {
    document.querySelectorAll("#LOGO").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "backlayer") {
    document.querySelectorAll("#backlayer").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "shoelace") {
    document.querySelectorAll("#shoelace").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "frontLayer") {
    document.querySelectorAll("#frontLayer").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "ribbon") {
    document.querySelectorAll("#ribbon").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "ribbonTag") {
    document.querySelectorAll("#ribbonTag").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  } else if (event.currentTarget.id === "topSole") {
    document.querySelectorAll("#topSole").forEach((element) => {
      element.style.fill = "rgba(0, 255, 0, 0.1)";
    });
  }
}

function mouseOut() {
  document.querySelectorAll("svg path").forEach((element) => {
    if (!elementsToPaint.includes(element)) element.style.fill = "rgba(0, 0, 0 , 0)";
  });
}

function pickPart(event) {
  const elements = document.querySelectorAll(`#${event.target.id}`);
  elementsToPaint.push(...elements);
  console.log("elementstopaint", elementsToPaint);
}
