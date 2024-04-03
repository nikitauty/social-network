import { Users } from '@/DataBase';
import { ChatCard } from '@/components/ChatCard';
import styles from './ChatsList.module.scss';

export const ChatsList = () => {
  return (
    <div className={styles.chats}>
      {Users.map(user => (
        <ChatCard
          user={user}
          message={{
            text: 'I really like work',
            time: '9:59',
            isAlreadyRead: true,
          }}
          key={user.id}
        />
      ))}
    </div>
  );
};
