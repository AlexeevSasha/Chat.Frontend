import { IUser } from './user';

export type IAuthSighIn = Pick<IUser, 'email' | 'password'>;
export type IAuthSighUp = Pick<IUser, 'email' | 'password' | 'firstname' | 'lastname'>;
export interface IAuthResponse {
  user: IUser;
  access_token: string;
}
