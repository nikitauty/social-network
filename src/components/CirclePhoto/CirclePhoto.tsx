import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import styles from './CirclePhoto.module.scss';
import type { CirclePhotoProps } from './types';

export const CirclePhoto = ({ image }: CirclePhotoProps) => {
  return (
    <Avatar className={styles.avatar}>
      <AvatarImage src={image} className={styles.image} />
      <AvatarFallback>...</AvatarFallback>
    </Avatar>
  );
};
