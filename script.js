// We see how many deaths end with after changing the circumstances

// Starting population variable

function calculations() {
    

    let x1 = (singlePly * 0,5) + (n95Mask * 1) + (vaccinationValue * 2) + (socialValue * 0,6);
}

function simulate() {
    let startPop = parseInt(document.getElementById("startPop").value);
    let singlePly = parseInt(document.getElementById("singlePlyMasks").value);
    let vaccinationvalue = parseInt(document.getElementById("n95Masks").value);
    let freqVac = parseInt(document.getElementById("freqVac").value);
    let amountSurvivors = startPop * 0.1;
    let amountDeaths = startPop * 0.9;
    let masks1 = singlePly * 0.1;
    let vaccines = vaccinationvalue * 0.5;
    

    // Without any changes to the factors, 90% of the population dies from the virus

    document.getElementById("survivors").innerHTML += amountSurvivors + masks1 + vaccines;

    document.getElementById("deaths").innerHTML += amountDeaths;
}