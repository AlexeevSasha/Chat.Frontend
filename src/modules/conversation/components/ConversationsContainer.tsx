import { useEffect } from 'react';
import { useConversationStore } from '../store';
import { ConversationCard } from './ConversationCard';

export const ConversationsContainer = () => {
  const { getConversations, conversations } = useConversationStore((state) => state);

  useEffect(() => {
    // getConversations();
  }, []);

  return conversations ? (
    <div>
      <button onClick={getConversations}>sadfasdf</button>
      {conversations.map((el) => (
        <ConversationCard key={el.id} />
      ))}
    </div>
  ) : (
    <div>нет диалогов</div>
  );
};
