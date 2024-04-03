import { useState } from 'react';
import { Chat } from '@/features/Chat';
import styles from './Chats.module.scss';
import { ChatsPanel } from '@/features/ChatsPanel';
import { EmptyChat } from '@/features/EmptyChat';

export const Chats = () => {
  const [currentChat, setCurrentChat] = useState();
  return (
    <div className={styles.chats}>
      <ChatsPanel />
      <main className={styles.chat}>
        {currentChat ? <Chat /> : <EmptyChat />}
      </main>
    </div>
  );
};
