import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import styles from './style.module.scss';

export function ResultsError() {
  return (
    <div className={styles.container}>
      <Card>
        <Typography variant="body" color="error">
          Failed to load results. Please try again later.
        </Typography>
      </Card>
    </div>
  );
}
