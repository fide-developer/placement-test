'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { useStartTest } from '@/api/test/start-test';
import styles from './style.module.scss';

export function RetryButton() {
  const router = useRouter();
  const { mutate: startTest, isPending: isStarting } = useStartTest();

  const handleRetry = () => {
    startTest(undefined, {
      onSuccess: (data) => {
        router.push(`/test/${data.sessionId}`);
      },
    });
  };

  return (
    <Button size="lg" onClick={handleRetry} loading={isStarting} className={styles.cta}>
      Retry Test
    </Button>
  );
}
