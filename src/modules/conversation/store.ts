import { createStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IConversation } from './interfaces/conversation';

interface IConversationStore {
  conversation: IConversation[] | null;
  loading: boolean;
}

export const useConversationStore = createStore<IConversationStore>()(
  persist(
    devtools(
      immer((set) => ({
        conversation: null,
        loading: false,
      }))
    ),
    { name: 'state-conversation', version: 1 }
  )
);
