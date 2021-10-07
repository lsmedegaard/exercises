"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  document.querySelector("#color").addEventListener("change", delegator);
  document.querySelector("#color").addEventListener("input", delegator);
  document.querySelector("input_choice").addEventListener("change", delegator);


  function delegator() {
    let hexColor = getColor();
    console.log(hexColor);
    let harmony = getHarmony();
    console.log(harmony)
    displayHarmonyColor()
    console.log()



  }
  function getColor() {
    let colorInput = document.querySelector("#color");
    colorInput = colorInput.value;
    console.log("got color");
    return colorInput;
  }


  function getHarmony() {
    let harmony = document.querySelector("#input_choice").value
    return harmony;
  }
  function displayHarmonyColor(hsl, harmony) {
    analagous(hsl)
  }

  function analagous(hsl){

  }


  // converters

  function converRGBToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else
        if (max === r) {
            h = 60 * (0 + (g - b) / (max - min));
        } else
            if (max === g) {
                h = 60 * (2 + (b - r) / (max - min));
            } else
                if (max === b) {
                    h = 60 * (4 + (r - g) / (max - min));
                }

    if (h < 0) { h = h + 360; }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;


    return [h, s, l].map(v => Math.round(v) + '%')
}


function convertHexToRgb(hexColor) {
  const rPart = hexColor.substr(1, 2)
  const gPart = hexColor.substr(3, 2)
  const bPart = hexColor.substr(5)
  const r = parseInt(rPart, 16)
  const g = parseInt(gPart, 16)
  const b = parseInt(bPart, 16)
  return [r, g, b]
}

function hexToHsl(hex) {
  let rgbColor = convertHexToRgb(hex)
  let hslColor = converRGBToHSL(rgbColor);
  return hslColor;

}
});
