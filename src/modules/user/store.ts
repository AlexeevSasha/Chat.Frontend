import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { AuthRequest } from '../../api/authRequest';
import { IUser } from './interfaces/user';
import { IAuthSighIn } from '../auth/interfaces/auth';

interface IUserStore {
  access: null | string;
  user: IUser | null;
  login: (values: IAuthSighIn) => void;
}

export const useUserStore = create<IUserStore>()(
  devtools(
    immer((set) => ({
      access: null,
      user: null,
      login: async (values) => {
        const response = await new AuthRequest().login(values);
        set({ user: response.user, access: response.access_token });
      },
    }))
  )
);
