import { IConversation } from '../../interfaces/conversation';
import styles from './ConversationCard.module.scss';

interface IProps {
  conversation: IConversation;
}

export const ConversationCard = ({ conversation }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar} />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.text} style={{ fontWeight: 500 }}>
            Alexeev Alexander
          </div>
          <div className={styles.date}>11.12.2013</div>
        </div>
        <div className={styles.info}>
          <div className={styles.text}>{conversation.lastMessage.content}</div>
        </div>
      </div>
    </div>
  );
};
