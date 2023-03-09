function simulate() {
  let startPop = document.getElementById("startPop").value;
  let vaccines = document.getElementById("freqVac").value;
  let masks = document.getElementById("masks").value;

  let maxVaccines = startPop;
  let maxMasks = startPop;
  let deaths = Math.round(startPop * 0.9); // 90% of the starting population
  let survivors = Math.max(startPop - deaths, 0);

  if (vaccines > maxVaccines) {
    vaccines = maxVaccines;
  }

  if (masks > maxMasks) {
    masks = maxMasks;
  }

  let savedByVaccine = 0;
  let savedByMask = 0;

  // Simulating the effect of vaccines
  for (let i = 0; i < vaccines; i++) {
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