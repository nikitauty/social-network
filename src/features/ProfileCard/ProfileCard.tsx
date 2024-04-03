import { EllipsisIcon, Settings2Icon } from 'lucide-react';
import styles from './ProfileCard.module.scss';
import { CircleAvatar } from '@/components/CircleAvatar';
import { ProfileCardProps } from './types';

export const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className={styles.profile_card}>
      <div className={styles.user}>
        <CircleAvatar image={user.image} isOnline={user.isOnline} />
        <div className={styles.information}>
          <span>{user.name}</span>
          <span className={styles.description}>{user.description}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.settings_button}
        aria-label="settings"
      >
        <EllipsisIcon />
      </button>
    </div>
  );
};
