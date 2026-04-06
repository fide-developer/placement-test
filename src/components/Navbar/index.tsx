import { Logo } from '@/components/Logo';
import styles from './style.module.scss';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  );
}
