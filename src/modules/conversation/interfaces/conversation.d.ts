import { IMessage } from '../../message/interfaces/message';
import { IUser } from '../../user/interfaces/user';

export interface IConversation {
  id: string;
  creator: IUser;
  recipient: IUser;
  createdAt: string;
  messages: IMessage;
}
