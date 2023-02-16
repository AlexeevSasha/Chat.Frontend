import { IUser } from '../../user/interfaces/user';

interface IMessage {
  id: string;
  content: string;
  createdAt: string;
  author: IUser;
}
