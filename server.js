import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { MAX_USERS_PER_ROOM } from './public/things/constants.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms = {};

app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    socket.on('joinRoom', ({ roomId, username, isDm }) => {
        // check if room exist
        if (!rooms[roomId]) {
            rooms[roomId] = {
                userCount: 0,
                dm: username,
                players: []
            };
        }

        const room = rooms[roomId];

        if (room.userCount < MAX_USERS_PER_ROOM) {
            socket.join(roomId);

            room.userCount++;
            socket.roomId = roomId;
            socket.username = username;
            socket.isDm = isDm;

            room.players.push({ name: username, isDm: isDm });

            io.to(roomId).emit('userJoined', {
                count: room.userCount,
                dm: room.dm,
                players: room.players
            });
        } else {
            socket.emit('roomFull', { roomId });
        }
    });

    socket.on('disconnect', () => {
        const roomId = socket.roomId;
        const username = socket.username;
        const isDm = socket.isDm;

        if (roomId && rooms[roomId]) {
            const room = rooms[roomId];

            if (isDm) {
                io.to(roomId).emit('roomClosed');
                delete rooms[roomId];
            } else {
                room.players = room.players.filter(player => player.name !== username);
                room.userCount--;
                io.to(roomId).emit('userLeft', { count: room.userCount, players: room.players });
            }
        }
    });
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
