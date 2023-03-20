function simulate(startPop, freqVac, masks) {
  let maxVaccines = startPop;
  let maxMasks = startPop;
  let deaths = Math.round(startPop * 0.9); // 90% of the starting population
  let survivors = Math.max(startPop - deaths, 0);

  if (freqVac > maxVaccines) {
    freqVac = maxVaccines;
  }

  if (masks > maxMasks) {
    masks = maxMasks;
  }

  let savedByVaccine = 0;
  let savedByMask = 0;

  // Simulating the effect of vaccines
  for (let i = 0; i < freqVac; i++) {
    if (survivors > 0) {
      survivors++;
      savedByVaccine++;
    }
  }

  // Simulating the effect of masks
  for (let i = 0; i < masks; i++) {
    if (survivors > 0 && Math.random() < 0.4) { // 40% chance of survival with mask
      survivors++;
      savedByMask++;
    }
  }

  deaths = Math.max(deaths - savedByVaccine - savedByMask, 0);
  let output = `  Deaths: ${deaths} <br>
                Survivors: ${Math.min(survivors, startPop)} <br>
                Lives Saved by Vaccines: ${savedByVaccine} <br>
                Lives Saved by Masks: ${savedByMask} <br>`;
  document.getElementById("output").innerHTML = output;
}

// Get input values and call the simulate function
const startPopInput = document.getElementById("startPop");
const freqVacInput = document.getElementById("freqVac");
const masksInput = document.getElementById("masks");
const simulateBtn = document.querySelector("button");p

simulateBtn.addEventListener("click", function () {
  const startPop = parseInt(startPopInput.value);
  const freqVac = parseInt(freqVacInput.value);
  const masks = parseInt(masksInput.value);

  simulate(startPop, freqVac, masks);
});