import { updateDmDisplay, updatePlayersDisplay, updateUserCount } from "./things/utils.js";

const socket = io();

const home = document.getElementById('home');
const gameContainer = document.getElementById('game');
const usernameInput = document.getElementById('username');
const createRoomButton = document.getElementById('create-room');
const joinRoomButton = document.getElementById('join-room');
const roomLinkDisplay = document.getElementById('room-link-display');
const userCountDisplay = document.getElementById('user-count');
const dmDisplay = document.getElementById('dm');
const playersDisplay = document.getElementById('players');

function showGameUI() {
    home.style.display = 'none';
    gameContainer.style.display = 'block';
}

createRoomButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        const isDm = true;
        const roomId = Math.random().toString(36).slice(2, 11);
        window.location.href = `/?room=${roomId}&username=${username}&isDm=${isDm}`;
    } else {
        alert('Please enter your name');
    }
});

joinRoomButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        const isDm = false;
        const urlParams = new URLSearchParams(window.location.search);
        const roomId = urlParams.get('room');
        if (roomId) {
            window.location.href = `/?room=${roomId}&username=${username}&isDm=${isDm}`;
        } else {
            alert('No room ID found. Please use a valid link to join a room.');
        }
    } else {
        alert('Please enter your name');
    }
});

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('room');
    const username = urlParams.get('username');
    const isDm = urlParams.get('isDm') === 'true';
    const roomLink = `${window.location.origin}/?room=${roomId}`;
    roomLinkDisplay.value = roomLink;

    if (roomId && username) {
        showGameUI();
        socket.emit('joinRoom', { roomId, username, isDm });
    }
};

socket.on('roomFull', () => {
    alert(`Room you are trying to join is full. Please try another room.`);
    window.location.href = '/';
});

socket.on('roomClosed', () => {
    alert('The room has been closed because the DM left. You will be redirected.');
    window.location.href = '/';
});

socket.on('userJoined', ({ count, dm, players }) => {
    updateUserCount(count, userCountDisplay);
    updateDmDisplay(dm, dmDisplay);
    updatePlayersDisplay(players, playersDisplay);
});

socket.on('userLeft', ({ count, players }) => {
    updateUserCount(count, userCountDisplay);
    updatePlayersDisplay(players, playersDisplay);
});

