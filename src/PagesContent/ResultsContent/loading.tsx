import { Typography } from '@/components/Typography';
import styles from './style.module.scss';

export function ResultsLoading() {
  return (
    <div className={styles.container}>
      <Typography variant="body" color="muted">
        Loading your placement results...
      </Typography>
    </div>
  );
}
