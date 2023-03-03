import { FC, createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

type ContextType = ReturnType<typeof useSocket>;

export const AppContext = createContext<ContextType>({} as ContextType);

export const ContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const socket = useSocket();
  return <AppContext.Provider value={{ ...socket }}>{children}</AppContext.Provider>;
};
