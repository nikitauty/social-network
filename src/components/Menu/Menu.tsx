import {
  MessageCircleMoreIcon,
  PhoneIcon,
  SettingsIcon,
  SunDimIcon,
  UsersIcon,
} from 'lucide-react';
import Logo from '@/assets/logo.svg?react';
import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <aside className={styles.menu}>
      <Logo />
      <section className={styles.navigation}>
        <UsersIcon size={30} />
        <PhoneIcon size={30} />
        <MessageCircleMoreIcon size={30} />
        <SettingsIcon size={30} />
      </section>
      <SunDimIcon />
    </aside>
  );
};
