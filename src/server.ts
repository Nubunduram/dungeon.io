import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { CustomSocket } from './types/customSocket';
import { MAX_USERS_PER_ROOM } from './types/constants';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms: { [key: string]: { userCount: number, dm: string | null, players: { name: string, isDm: boolean, ready: boolean }[] } } = {};

app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket: CustomSocket) => {
    socket.on('joinRoom', ({ roomId, username, isDm, ready }) => {
        if (!rooms[roomId]) {
            rooms[roomId] = {
                userCount: 0,
                dm: isDm ? username : null,
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
            socket.ready = ready;

            room.players.push({ name: username, isDm, ready });

            io.to(roomId).emit('userJoined', { count: room.userCount, dm: room.dm, players: room.players });
        } else {
            socket.emit('roomFull', { roomId });
        }
    });

    socket.on('playerReady', () => {
        const roomId = socket.roomId;
        const username = socket.username;

        if (roomId && rooms[roomId]) {
            const room = rooms[roomId];
            const player = room.players.find(p => p.name === username);

            if (player) {
                player.ready = true;
                io.to(roomId).emit('playerReadyUpdate', { players: room.players });

                const allReady = room.players.every(p => p.ready);
                if (allReady) {
                    io.to(roomId).emit('startGame');
                }
            }
        }
    });

    socket.on('disconnect', () => {
        const roomId = socket.roomId;
        const username = socket.username;
        const isDm = socket.isDm;

        if (roomId && rooms[roomId]) {
            const room = rooms[roomId];
            room.players = room.players.filter(player => player.name !== username);
            room.userCount--;

            if (isDm) {
                io.to(roomId).emit('roomClosed');
                delete rooms[roomId];
            } else if (room.userCount === 0) {
                delete rooms[roomId];
            } else {
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
