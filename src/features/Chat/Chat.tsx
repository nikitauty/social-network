import { ProfileCard } from '../ProfileCard';
import styles from './Chat.module.scss';

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <div>
        <ProfileCard />
      </div>
    </div>
  );
};
