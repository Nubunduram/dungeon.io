import { Socket } from "socket.io";

interface CustomSocket extends Socket {
  roomId?: string;
  username?: string;
  isDm?: boolean;
  ready?: boolean;
}
