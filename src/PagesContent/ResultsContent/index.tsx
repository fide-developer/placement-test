'use client';

import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { useGetResult } from '@/api/test/get-result';
import { ResultsLoading } from './loading';
import { ResultsError } from './error';
import styles from './style.module.scss';

interface ResultsContentProps {
  taskId: string;
}

export function ResultsContent({ taskId: _taskId }: ResultsContentProps) {
  const { data: result, isPending, isError } = useGetResult();

  if (isPending) {
    return <ResultsLoading />;
  }

  if (isError || !result) {
    return <ResultsError />;
  }

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
    </div>
  );
}
