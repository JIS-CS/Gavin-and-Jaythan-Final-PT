// Global Variables

// Starting population variable

function simulate() {
    let finalStartPop = parseInt(document.getElementById("startPop").value) * 0.1;

    // Inital finalSurvivors value; regardless of factors, finalSurvivors = 10% of startPop
    let finalSurvivors = parseInt(finalStartPop * 0.1);

    // Factor of success rate of living for vaccine: 100%
    // let freqVac = parseInt(document.getElementById("freqVac").value);

    // let finalSurvivors = parseInt(finalSurvivors + freqVac);

    // let singlePlyMasks = parseInt(document.getElementById("singlePlyMasks").value); 
    // let n95Masks = parseInt(document.getElementById("n95Masks").value);

    document.getElementById("survivors").innerHTML += finalSurvivors;
    document.getElementById("deaths").innerHTML += finalDeaths;
}

// function simulatePandemic() {
//     let startPop = parseInt(document.getElementById("startPop").value);
//     let totalSurvivors = 0;
    
//     // Simulate the spread of the pandemic
//     while (infected > 0) {
//       const newInfections = Math.ceil(infected * 0.2);
//       infected += newInfections;
//       const deaths = Math.floor(infected * 0.05);
//       infected -= deaths;
//       totalSurvivors += (infected - deaths);
//     }
    
//     // Print the final number of survivors
//     const finalSurvivors = Math.floor(startPop * 0.1);
//     console.log(`Out of the original ${startPop} population, only ${finalSurvivors} survived the pandemic.`);
    
//     return totalSurvivors;
//   }

function simulatePandemic() {
    const startPop = parseInt(document.getElementById("startPop").value);
    let infected = startPop;
    let totalSurvivors = 0;
    let totalDeaths = 0;
  
    while (infected > 0) {
      const newInfections = Math.ceil(infected * 0.2);
      infected += newInfections;
      const deaths = Math.floor(infected * 0.05);
      infected -= deaths;
      totalDeaths += deaths;
      totalSurvivors += (infected - deaths);
    }
  
    const finalSurvivors = Math.floor(startPop * 0.1);
    const finalDeaths = totalDeaths + (startPop - totalSurvivors - totalDeaths);
    
    document.getElementById("survivors").innerHTML += finalSurvivors;
    document.getElementById("deaths").innerHTML += finalDeaths;
  }