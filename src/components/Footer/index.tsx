import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from '@/components/Link';
import { Typography } from '@/components/Typography';
import styles from './style.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography variant="bodySmall" color="muted">Build by Fadjar Firdaus</Typography>
      <div className={styles.icons}>
        <Link
          href="https://www.linkedin.com/in/fadjarfirdaus"
          external
          className={styles.iconLink}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.github.com/fide.developer"
          external
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}
