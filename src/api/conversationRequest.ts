import { BaseRequest } from './baseRequest';
import { IConversation } from '../modules/conversation/interfaces/conversation';
import { customLocalStorage } from '../common/utils/customLocalStorage';

export class ConversationRequest extends BaseRequest {
  getConversations() {
    return this.get<IConversation[]>('/conversations', customLocalStorage.getAccessToken());
  }
}
