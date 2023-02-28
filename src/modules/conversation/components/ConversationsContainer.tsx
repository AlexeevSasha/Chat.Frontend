import { useContext, useEffect } from 'react';
import { useConversationStore } from '../store';
import { ConversationCard } from './ConversationCard';
import { SocketContext } from '../../../common/utils/context/socket';

export const ConversationsContainer = () => {
  const { getConversations, conversations } = useConversationStore((state) => state);
  const socket = useContext(SocketContext);

  useEffect(() => {
    // getConversations();
  }, []);

  useEffect(() => {
    socket.on('connected', (paylod) => {
      console.log(paylod, 'dsafasf');
    });
    socket.on('conversation.test', (paylod) => {
      console.log(paylod, 'lox');
    });

    return () => {
      socket.off('connected');
    };
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
