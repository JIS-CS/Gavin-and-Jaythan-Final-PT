// We see how many deaths we end u with after changin gthe circumstances

// Starting population variable


function calculations() {
    let singlePly = getElementbyId("singlePlyMasks").value;
    let n95Mask = getElementbyId("n95Masks").value;
    let vaccinationvalue = getElementbyId("freqVac").value;
    let socialvalue = getElementbyId("socialDistancing").value;

    let x1 = (singlePly * 0,5) + (n95Mask * 1) + (vaccinationvalue * 2) + (socialvalue * 0,6);
}

function simulate() {
    let startPop = document.getElementById("startPop").value;
    let amountSurvivors = parseInt(startPop * 0.1);
    let amountDeaths = parseInt(startPop * 0.9);

    // Without any changes to the factors, 90% of the population dies from the virus

    document.getElementById("survivors").innerHTML += amountSurvivors;

    document.getElementById("deaths").innerHTML += amountDeaths;
}