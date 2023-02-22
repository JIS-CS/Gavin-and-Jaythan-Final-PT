function simulatePandemic() {
  let startPop = parseInt(document.getElementById("startPop").value);
  let singlePlyMasks = parseInt(document.getElementById("singlePlyMasks").value);
  let n95Masks = parseInt(document.getElementById("n95Masks").value);
  let freqVac = parseFloat(document.getElementById("freqVac").value);

  // Validate user input
  if (isNaN(startPop) || isNaN(singlePlyMasks) || isNaN(n95Masks) || isNaN(freqVac)) {
    alert("Please enter a valid number for all input fields.");
    return;
  }

  // Calculate the number of deaths
  let totalDeaths = startPop * 0.9;
  let maskedDeaths = (singlePlyMasks * 0.4) + (n95Masks * 0.4);
  let unmaskedDeaths = (totalDeaths - maskedDeaths) * (1 - freqVac) * 0.1;
  let totalDeathsAfterVaccine = maskedDeaths + unmaskedDeaths;

  // Calculate the number of survivors
  let survivors = startPop - totalDeathsAfterVaccine;

  // If the number of survivors is negative, set it to 0
  if (survivors < 0) {
    survivors = 0;
  }

  // Update the HTML with the results
  document.getElementById("deaths").innerHTML = survivors;
  document.getElementById("survivors").innerHTML = totalDeathsAfterVaccine;
}