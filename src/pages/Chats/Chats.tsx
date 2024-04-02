import styles from './Chats.module.scss';
import { ChatsList } from '@/components/ChatsList';

export const Chats = () => {
  return (
    <div className={styles.chats}>
      <ChatsList />
      <main className={styles.chat}>Chats</main>
    </div>
  );
};
