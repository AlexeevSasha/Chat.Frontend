import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AuthRequest } from '../../api/authRequest';
import { IUser } from './interfaces/user';
import { IAuthSighIn } from '../auth/interfaces/auth';
import { customLocalStorage } from '../../common/utils/customLocalStorage';

interface IUserStore {
  user: IUser | null;
  login: (values: IAuthSighIn) => void;
  logout: () => void;
}

export const useUserStore = create<IUserStore>()(
  persist(
    devtools(
      immer((set) => ({
        user: null,
        login: async (values) => {
          const { user, access_token } = await new AuthRequest().login(values);
          customLocalStorage.setAccessToken(access_token);
          set({ user });
        },
        logout: async () => {
          await new AuthRequest().logout();
          set({ user: null });
          localStorage.clear();
        },
      }))
    ),
    { name: 'state-user', version: 1 }
  )
);
