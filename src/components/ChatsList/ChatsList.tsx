import { ProfileCard } from '../ProfileCard';
import { SearchField } from '../SearchField';
import styles from './ChatsList.module.scss';

export const ChatsList = () => {
  return (
    <section className={styles.chats_list}>
      <ProfileCard />
      <SearchField />
    </section>
  );
};
