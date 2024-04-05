import { Badge } from '@/components/ui/badge';
import styles from './EmptyChat.module.scss';

export const EmptyChat = () => {
  return (
    <div className={styles.banner}>
      <Badge variant="default" className={styles.badge}>
        Select a chat to start messaging
        <Badge variant="destructive">Aboba</Badge>
      </Badge>
    </div>
  );
};
