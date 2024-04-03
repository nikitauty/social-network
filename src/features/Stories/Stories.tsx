import { CircleAvatar } from '@/components/CircleAvatar';
import styles from './Stories.module.scss';
import { StoriesProps } from './types';

export const Stories = ({ showStory, users }: StoriesProps) => {
  return (
    <div className={styles.stories}>
      {users.map(user => (
        <button
          type="button"
          onClick={showStory}
          key={user.id}
          aria-label="Story"
        >
          <CircleAvatar image={user.image} isOnline={user.isOnline} />
          <span>{user.name}</span>
        </button>
      ))}
    </div>
  );
};
