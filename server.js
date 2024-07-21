import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { MAX_USERS_PER_ROOM } from './public/things/constants.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const roomOccupancy = {};

app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    socket.on('joinRoom', ({ roomId, username, isDm }) => {
        if (!roomOccupancy[roomId]) {
            roomOccupancy[roomId] = 0;
        }

        if (roomOccupancy[roomId] < MAX_USERS_PER_ROOM) {
            socket.join(roomId);
            roomOccupancy[roomId]++;
            socket.roomId = roomId; // Store roomId in socket object

            // Notify room about the new user
            io.to(roomId).emit('userJoined', { count: roomOccupancy[roomId] });
        } else {
            socket.emit('roomFull', { roomId });
        }
    });

    socket.on('disconnect', () => {
        const roomId = socket.roomId;
        if (roomId && roomOccupancy[roomId]) {
            roomOccupancy[roomId]--;
            if (roomOccupancy[roomId] === 0) {
                delete roomOccupancy[roomId];
            } else {
                io.to(roomId).emit('userLeft', { count: roomOccupancy[roomId] });
            }
        }
    });
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
