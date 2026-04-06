import styles from './style.module.scss';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      Placement Test
    </span>
  );
}
