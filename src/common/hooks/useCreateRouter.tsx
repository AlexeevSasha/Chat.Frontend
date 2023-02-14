import { createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import { AuthPaths, PrivatePaths } from '../constants/routers';

export const useCreateRouter = () => {
  return useMemo(() => createBrowserRouter(PrivatePaths), []);
};
