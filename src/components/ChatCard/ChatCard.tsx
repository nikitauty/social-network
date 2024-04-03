import { useState } from 'react';
import { CheckCheckIcon, CheckIcon } from 'lucide-react';
import styles from './ChatCard.module.scss';
import { ChatCardProps } from './types';
import { CircleAvatar } from '../CircleAvatar';

export const ChatCard = ({ user, message }: ChatCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const className = `${styles.chat_card} ${isActive ? 'active' : ''}`;
  return (
    <div
      className={className}
      onClick={() => setIsActive(isActive || !isActive)}
      aria-hidden="true"
    >
      <div className={styles.user}>
        <CircleAvatar image={user.image} isOnline={user.isOnline} />
        <div className={styles.main}>
          <span>{user.name}</span>
          <span className={styles.message}>{message.text}</span>
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.time}>{message.time}</span>
        <span className={styles.read}>
          {message.isAlreadyRead ? <CheckCheckIcon /> : <CheckIcon />}
        </span>
      </div>
    </div>
  );
};
