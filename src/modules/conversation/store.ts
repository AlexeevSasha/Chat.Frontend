import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IConversation } from './interfaces/conversation';
import { ConversationRequest } from '../../api/conversationRequest';

interface IConversationStore {
  conversations: IConversation[];
  loading: boolean;
  getConversations: () => void;
}

export const useConversationStore = create<IConversationStore>()(
  persist(
    devtools(
      immer((set) => ({
        conversations: [],
        loading: false,
        getConversations: async () => {
          const conversations = await new ConversationRequest().getConversations();
          set({ conversations });
        },
      }))
    ),
    { name: 'state-conversation', version: 1 }
  )
);
