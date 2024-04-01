import { Outlet } from 'react-router-dom';
import { Menu } from '@/components/Menu';
import styles from './RootLayout.module.scss';

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Menu />
      <Outlet />
    </div>
  );
};
