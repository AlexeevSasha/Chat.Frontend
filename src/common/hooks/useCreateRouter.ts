import { createBrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import { AuthPaths } from '../constants/parh';

export const useCreateRouter = () => {
  return useMemo(() => createBrowserRouter(AuthPaths), []);
};
