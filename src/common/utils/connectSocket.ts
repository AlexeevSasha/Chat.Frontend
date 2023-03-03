import { io } from 'socket.io-client';

export const connectSocket = () =>
  io(String(process.env.REACT_APP_WEBSOCKET_URL), {
    withCredentials: true,
  });
