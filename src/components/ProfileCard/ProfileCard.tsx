import { Settings2Icon } from 'lucide-react';
import styles from './ProfileCard.module.scss';
import { CirclePhoto } from '../CirclePhoto';

// TODO: fix eslintjsx-a11y/control-has-associated-label error line 15
export const ProfileCard = () => {
  return (
    <div className={styles.profile_card}>
      <div className={styles.user}>
        <CirclePhoto image="/4.jpg" />
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
