const navn = "lasse Mark Smedegaard"


function resultat () {
    const findT = navn.substring(2, 3).toUpperCase("");
    const foersteDel = navn.substring(0, 2).toLowerCase("");
    const andenDel = navn.substring(3, 5).toLowerCase("");

    const resultatet = (`${foersteDel}${findT}${andenDel}`)
    console.log(resultatet)

}

resultat(navn)