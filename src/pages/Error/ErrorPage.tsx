import { ErrorPageProps } from './types';
import styles from './ErrorPage.module.scss';

export const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error_number}>{error.id}</h1>
      <h3 className={styles.error_text}>{error.text}</h3>
    </div>
  );
};
