import { createStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IMessage } from './interfaces/message';

interface IMessageStore {
  messages: IMessage[] | null;
  loading: boolean;
}

export const useMessageStore = createStore<IMessageStore>()(
  persist(
    devtools(
      immer((set) => ({
        messages: null,
        loading: false,
      }))
    ),
    { name: 'state-message', version: 1 }
  )
);
