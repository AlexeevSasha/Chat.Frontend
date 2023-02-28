import { IMessage } from '../../message/interfaces/message';
import { IUser } from '../../user/interfaces/user';

export interface IConversation {
  id: string;
  lastMessageAt: Date;
  creator: IUser;
  recipient: IUser;
  createdAt: Date;
  lastMessage: IMessage;
}
