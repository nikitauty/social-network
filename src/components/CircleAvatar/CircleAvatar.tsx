import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import styles from './CircleAvatar.module.scss';
import type { CircleAvatarProps } from './types';

export const CircleAvatar = ({ image, isOnline }: CircleAvatarProps) => {
  return (
    <>
      <Avatar className={styles.avatar}>
        <AvatarImage src={image} className={styles.image} />
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
      {isOnline && <span className={styles.indicator} />}
    </>
  );
};
