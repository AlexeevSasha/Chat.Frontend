import { io } from 'socket.io-client';
import { createContext } from 'react';

export const socket = io(String(process.env.REACT_APP_WEBSOCKET_URL), {
  withCredentials: true,
});
export const SocketContext = createContext(socket);
