"use strict";

// The model of all features
const features = {
  drinksholder: false,
  led: false,
  propeller: false,
  shield: false,
  solarfan: false
};


window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  // register toggle-clicks

  document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption));
  
}

function toggleOption(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;
  // TODO: Toggle feature in "model"  
  // If feature is (now) turned on:
  // - mark target as chosen (add class "chosen")
  // - un-hide the feature-layer(s) in the #product-preview;
  // - create featureElement and append to #selected ul
  // - create FLIP-animation to animate featureElement from img in target, to
  //   its intended position. Do it with normal animation or transition class!

  features[feature] = !features[feature]


  if (features[feature]) {
    // feature added
    console.log(`Feature ${feature} is turned on!`);
    target.classList.add("chosen")
    //remover hide fra den 
    document.querySelector(`[data-feature*="${feature}"]`).classList.remove("hide")
    let featureElement = createFeatureElement(feature)
    console.log("featureElement:", featureElement)

    
    document.querySelector("#selected ul").append(featureElement)
    let firstPos = target.getBoundingClientRect();
    let lastPos = featureElement.getBoundingClientRect();
    // console.log("firstPos:", firstPos) 
    // console.log("lastPos:", lastPos)

    const deltaX = firstPos.left - lastPos.left;
    const deltaY = firstPos.top - lastPos.top;
    const deltaW = firstPos.width / lastPos.width;
    const deltaH = firstPos.height / lastPos.height;

    featureElement.animate([{
      transformOrigin: 'top left',
      transform: `
        translate(${deltaX}px, ${deltaY}px)
        scale(${deltaW}, ${deltaH})
      `
    }, {
      transformOrigin: 'top left',
      transform: 'none'
    }], {
      duration: 900,
      easing: 'ease-in-out',
      fill: 'both'
    });
    // console.log("deltaX:", deltaX, "deltaY:", deltaY)
 

    

    // const valgtFeature = document.querySelector(`#${feature}`)
    // console.log("valgt", valgtFeature)
    // document.querySelectorAll(`${feature}`).forEach(element => {
    //   element.classList.remove("hide")
      
    // });
    

    // TODO: More code

    // Else - if the feature (became) turned off:
  // - no longer mark target as chosen
  // - hide the feature-layer(s) in the #product-preview
  // - find the existing featureElement in #selected ul
  // - create FLIP-animation to animate featureElement to img in target
  // - when animation is complete, remove featureElement from the DOM

  } else {
    // feature removed
    console.log(`Feature ${feature} is turned off!`);
    target.classList.remove("chosen")


    document.querySelector(`[data-feature*="${feature}"]`).classList.add("hide")
    let existingElement = document.querySelector(`#selected ul [data-feature*="${feature}"]`)
    let firstPos = existingElement.getBoundingClientRect()
    let lastPos = target.getBoundingClientRect()
    console.log("firstPos:", firstPos) 
    console.log("lastPos:", lastPos) 

    const deltaX = firstPos.left - lastPos.left;
    const deltaY = firstPos.top - lastPos.top;
    const deltaW = firstPos.width / lastPos.width;
    const deltaH = firstPos.height / lastPos.height;

    target.animate([{
      transformOrigin: 'top left',
      transform: `
        translate(${deltaX}px, ${deltaY}px)
        scale(${deltaW}, ${deltaH})
      `
    }, {
      transformOrigin: 'top left',
      transform: 'none'
    }], {
      duration: 900,
      easing: 'ease-in-out',
      fill: 'both'
    });
    existingElement.remove();
    // TODO: More code

  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  const li = document.createElement("li");
  li.dataset.feature = feature;

  const img = document.createElement("img");
  img.src = `images/feature_${feature}.png`;
  img.alt = capitalize(feature);

  li.append(img);

  return li;
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
}