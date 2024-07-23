export function updateUserCount(count, userCountDisplay) {
    userCountDisplay.textContent = `Users in room: ${count}`;
}

export function updateDmDisplay(dm, dmDisplay) {
    dmDisplay.textContent = `DM: ${dm}`;
}

export function updatePlayersDisplay(players, playersDisplay) {
    // Extract names from the players array
    const playerNames = players.map(player => player.name);

    // Join the names with a comma
    const playerNamesString = playerNames.join(', ');

    // Update the display with the joined names
    playersDisplay.innerHTML = `Players: ${playerNamesString}`;
}