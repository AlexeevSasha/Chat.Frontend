import { createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import { AuthPaths, PrivatePaths } from '../constants/routers';
import { useUserStore } from '../../modules/user/store';

export const useCreateRouter = () => {
  const id = useUserStore((state) => state.user?.id);

  return useMemo(() => createBrowserRouter(!id ? AuthPaths : PrivatePaths), [id]);
};
