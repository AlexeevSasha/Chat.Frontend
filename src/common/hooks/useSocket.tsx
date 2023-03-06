import { useEffect, useState } from 'react';
import { useUserStore } from '../../modules/user/store';
import { connectSocket } from '../utils/connectSocket';
import { Socket } from 'socket.io-client';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket>();
  const id = useUserStore((state) => state.user?.id);

  useEffect(() => {
    if (id) setSocket(connectSocket());
    else socket?.disconnect();
  }, [id]);

  return { socket };
};
