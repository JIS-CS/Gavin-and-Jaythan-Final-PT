// Define an empty array list to store simulation results
let simulationResults = [];

function simulate(startPop, freqVac, freqMasks) {
  
  // Check if freqVac and freqMasks are valid numbers
  if ((freqVac === "" || freqVac < 0 || isNaN(freqVac)) || (freqMasks === "" || freqMasks < 0 || isNaN(freqMasks))) {
    alert("Please make sure you enter valid numbers.");
    return;
  }

  // Calculate inital deaths and survivors

  // Deaths is initially 90% of the starting population
  let deaths = Math.round(startPop * 0.9); // 90% of the starting population
  let maxDeaths = startPop - 1; // The maximum number of deaths that can occur is the starting population - 1
  let survivors = Math.max(startPop - deaths, 0);

  // Calculate the maximum number of vaccines and masks
  let maxVaccines = startPop;
  let maxMasks = startPop;

  // Give a capcity limit for the vaccines and mask parameters to the max value
  if (freqVac > maxVaccines) {
    freqVac = maxVaccines;
  }
  if (freqMasks > maxMasks) {
    freqMasks = maxMasks;
  }

  // Iterating the effect of vaccines/masks
  for (let i = 0; i < freqVac; i++) {
    if (survivors < startPop) { // Give vaccinations only if there are still survivors
      survivors++;
    }
  }
  for (let i = 0; i < freqMasks; i++) {
    if (survivors < startPop && Math.random() > 0.5) { // 50% chance of survival with mask
      survivors++;
    }
  }

  let finalDeaths = Math.min(startPop - survivors, maxDeaths); // Set a maximum to the number of deaths to the maximum possible value

  // Create an object to store the simulationResults array for this iteration
  let result = {
    startPop: startPop,
    freqVac: freqVac,
    freqMasks: freqMasks,
    deaths: finalDeaths,
    survivors: survivors
  };

  // Push result into array
  simulationResults.push(result);

  // Output the simulation results into web page

  document.getElementById("addOn").innerHTML = "";

  for (let i = 0; i < simulationResults.length; i++) {

    let addOn = document.getElementById("addOn");
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td> #${i + 1}</td>
      <td>${simulationResults[i].startPop}</td>
      <td>${simulationResults[i].freqVac}</td>
      <td>${simulationResults[i].freqMasks}</td>
      <td>${simulationResults[i].deaths}</td>
      <td>${simulationResults[i].survivors}</td>
    `;

    addOn.appendChild(newRow);
  }
} 

function restart() {
  window.location.href = "index.html";
}