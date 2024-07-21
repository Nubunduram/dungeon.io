const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log("User on website");

    socket.on('createNewRoom', ({ roomId, username }) => {
        socket.join(roomId);
        console.log(`${username} created a new room: ${roomId}`);
        socket.to(roomId).emit('message', `${username} has joined the room`);
    })

    socket.on('joinRoom', ({ roomId, username }) => {
        socket.join(roomId);
        console.log(`${username} joined room ${roomId}`);
        socket.to(roomId).emit('message', `${username} has joined the room`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
