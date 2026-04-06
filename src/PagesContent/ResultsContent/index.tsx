'use client';

import { useRouter } from 'next/navigation';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { useGetResult } from '@/api/test/get-result';
import { useStartTest } from '@/api/test/start-test';
import { ResultsLoading } from './loading';
import { ResultsError } from './error';
import styles from './style.module.scss';
import { useState } from 'react';

export function ResultsContent() {
  const router = useRouter();
  const { data: result, isPending, isError } = useGetResult();
  const { mutate: startTest } = useStartTest();
  const [isStartingNewTest, setIsStartingNewTest] = useState<boolean>(false)

  const handleRetry = () => {
    setIsStartingNewTest(true)
    startTest(undefined, {
      onSuccess: (data) => {
        router.push(`/test/${data.sessionId}`);
      },
    });
  };

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

      <Button size="lg" onClick={handleRetry} loading={isStartingNewTest} className={styles.cta}>
        Retry Test
      </Button>
    </div>
  );
}
