"use strict";

function cssToRGB(str) {
    const noP = str.lastIndexOf(")")
    const opdel = str.substring("4", noP).split(",")

    const rPart = opdel[0]
    const gPart = opdel[1]
    const bPart = opdel[2]

    const r = parseInt(rPart, 10)
    const g = parseInt(gPart, 10)
    const b = parseInt(bPart, 10)

    console.log(r, g, b)
    



/*     const firstP = str.indexOf("(")+1
    const Comma = str.indexOf(",")
    const lastSpace = str.lastIndexOf(",")

    const r = str.substring(firstP, Comma)
    const g = str.substring(Comma, lastSpace)
/*     const b = str.substring(firstP, Comma) */
     

}

cssToRGB("rgb(192, 13, 1)")