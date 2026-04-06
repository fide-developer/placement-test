import { Typography } from '@/components/Typography';
import styles from './style.module.scss';

export function QuestionError() {
  return (
    <div className={styles.container}>
      <Typography variant="body" color="error">Failed to load question.</Typography>
    </div>
  );
}
