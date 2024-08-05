export function updateUserCount(count, userCountDisplay) {
    userCountDisplay.textContent = `Users in room: ${count}`;
}

export function updateDmDisplay(dm, dmDisplay) {
    dmDisplay.textContent = `DM: ${dm}`;
}

export function hideAndShowUI(toHide, toShow) {
    toHide.style.display = 'none';
    toShow.style.display = 'block';
}

export function updatePlayersDisplay(players, playersDisplay) {
    playersDisplay.innerHTML = 'Players:';
    players.forEach(player => {
        playersDisplay.innerHTML += `${player.name} ${player.ready ? '(Ready)' : ''}`;
    });
}
