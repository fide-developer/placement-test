import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { RetryButton } from './RetryButton';
import type { TestResult } from '@/api/test/get-result';
import styles from './style.module.scss';

interface ResultsContentProps {
  result: TestResult;
}

export function ResultsContent({ result }: ResultsContentProps) {
  return (
    <div className={styles.container}>
      <Typography variant="h3">Your Results</Typography>

      <Card>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <Typography variant="bodySmall" className={styles.statLabel}>
              Level
            </Typography>
            <Badge variant="primary">
              {result.level.replace(/_/g, ' ')}
            </Badge>
          </div>

          <div className={styles.statItem}>
            <Typography variant="bodySmall" className={styles.statLabel}>
              Questions Answered
            </Typography>
            <Typography variant="body" className={styles.statValue}>
              {result.correctAnswers} / {result.totalQuestions}
            </Typography>
          </div>

          <div className={styles.statItem}>
            <Typography variant="bodySmall" className={styles.statLabel}>
              Accuracy
            </Typography>
            <Typography variant="body" className={styles.statValue}>
              {result.accuracy}%
            </Typography>
          </div>
        </div>
      </Card>

      <RetryButton />
    </div>
  );
}
