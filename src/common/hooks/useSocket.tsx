import { useEffect } from 'react';
import { useUserStore } from '../../modules/user/store';
import { connectSocket } from '../utils/connectSocket';

export const useSocket = () => {
  const id = useUserStore((state) => state.user?.id);
  const socket = connectSocket();

  useEffect(() => {
    if (id) socket.connect();
    else socket.disconnect();
  }, [id]);

  return { socket };
};
