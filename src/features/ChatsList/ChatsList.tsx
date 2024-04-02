import { ProfileCard } from '@/features/ProfileCard';
import { SearchField } from '@/components/SearchField';
import styles from './ChatsList.module.scss';

export const ChatsList = () => {
  return (
    <section className={styles.chats_list}>
      <ProfileCard />
      <SearchField />
    </section>
  );
};
