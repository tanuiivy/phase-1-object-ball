function goodPractices() {
  let game = gameObject(); // Gets the game object
  for (let gameKey in game) {
    debugger;
    let teamObj = game[gameKey]; // Accesses the home or away team object
    for (let teamKey in teamObj) {
      debugger;
      if (teamKey === "players") { // Ensure we only loop through players
        let data = teamObj[teamKey];
        for (let playerName in data) {
          debugger;
        }
      }
    }
  }
}

goodPractices(); // Call the function to run

