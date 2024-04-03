import { ProfileCard } from '@/features/ProfileCard';
import { SearchField } from '@/components/SearchField';
import styles from './ChatsPanel.module.scss';
import { Stories } from '@/features/Stories';
import { Users } from '@/DataBase';
import { ChatsList } from '@/features/ChatsList';

export const ChatsPanel = () => {
  return (
    <section className={styles.chats_list}>
      <ProfileCard user={Users[0]} />
      <SearchField />
      <Stories showStory={() => console.log('@@')} users={Users} />
      <ChatsList />
    </section>
  );
};
