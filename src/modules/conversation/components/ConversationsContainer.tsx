import { useEffect } from 'react';
import { useConversationStore } from '../store';
import { ConversationCard } from './ConversationCard/ConversationCard';

export const ConversationsContainer = () => {
  const { getConversations, conversations } = useConversationStore((state) => state);

  useEffect(() => {
    getConversations();
  }, []);

  return conversations.length ? (
    <div>
      {conversations?.map((el) => (
        <ConversationCard conversation={el} key={el.id} />
      ))}
    </div>
  ) : (
    <div>нет диалогов</div>
  );
};
