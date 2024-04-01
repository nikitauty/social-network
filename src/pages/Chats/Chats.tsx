import styles from './Chats.module.scss';

export const Chats = () => {
  return (
    <div className={styles.chats}>
      <section className={styles.users}>Users</section>
      <main className={styles.chat}>Chats</main>
    </div>
  );
};
