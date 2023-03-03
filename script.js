function simulate() {
  let startPop = parseInt(document.getElementById("startPop").value);
  let singlePlyMasks = parseInt(document.getElementById("singlePlyMasks").value);
  let n95Masks = parseInt(document.getElementById("n95Masks").value);
  let freqVac = parseInt(document.getElementById("freqVac").value);

  // Calculate survival rates based on masks distributed
  let singlePlySurvivalRate = singlePlyMasks > 0 ? 0.4 : 0;
  let n95SurvivalRate = n95Masks > 0 ? 0.8 : 0;

  // Calculate number of lives saved based on masks distributed
  let singlePlyLivesSaved = Math.min(singlePlyMasks, startPop) * singlePlySurvivalRate;
  let n95LivesSaved = Math.min(n95Masks, startPop) * n95SurvivalRate;
  let totalLivesSaved = Math.round(singlePlyLivesSaved + n95LivesSaved);

  // Calculate total deaths
  let totalDeaths = startPop - totalLivesSaved - Math.round(startPop * freqVac * 0.1);

  // Ensure that deaths and survivors cannot be negative or exceed the starting population
  totalDeaths = Math.max(0, totalDeaths);
  totalDeaths = Math.min(totalDeaths, startPop);
  let totalSurvivors = Math.min(startPop - totalDeaths, startPop);

  // Output results
  document.getElementById("deaths").innerHTML = totalDeaths;
  document.getElementById("survivors").innerHTML = totalSurvivors;
}