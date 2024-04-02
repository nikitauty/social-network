import { Settings2Icon } from 'lucide-react';
import styles from './ProfileCard.module.scss';
import { CircleAvatar } from '@/components/CircleAvatar';

// TODO: fix eslintjsx-a11y/control-has-associated-label error line 15
export const ProfileCard = () => {
  return (
    <div className={styles.profile_card}>
      <div className={styles.user}>
        <CircleAvatar image="/4.jpg" isOnline />
        <div className={styles.information}>
          <span>Carter Donin</span>
          <span className={styles.description}>UI / UX Designer</span>
        </div>
      </div>
      <button type="button" className={styles.settings_button}>
        <Settings2Icon />
      </button>
    </div>
  );
};
