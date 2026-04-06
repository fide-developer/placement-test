import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import styles from './style.module.scss';

interface ResultsErrorProps {
  onRetry?: () => void;
}

export function ResultsError({ onRetry }: ResultsErrorProps) {
  return (
    <div className={styles.container}>
      <Card>
        <Typography variant="body" color="error">
          Failed to load results. Please try again later.
        </Typography>
        {onRetry && (
          <Button size="lg" onClick={onRetry} className={styles.cta}>
            Try Again
          </Button>
        )}
      </Card>
    </div>
  );
}
