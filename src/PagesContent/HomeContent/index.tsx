'use client';

import { useRouter } from 'next/navigation';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { useStartTest } from '@/api/test/start-test';
import styles from './style.module.scss';
import { useState } from 'react';

export function HomeContent() {
  const router = useRouter();
  const { mutate } = useStartTest();
  const [isStartingTest, setIsStartingTest] = useState(false)

  const handleStart = () => {
    setIsStartingTest(true)
    mutate(undefined, {
      onSuccess: (data) => {
        router.push(`/test/${data.sessionId}`);
      },
    });
  };

  return (
    <section className={styles.hero}>
      <Typography variant="h1" align="center">
        Welcome to the English Placement Test
      </Typography>
      <Typography variant="body" color="muted" align="center" className={styles.subtitle}>
        Discover your English proficiency level in just a few minutes.
        Answer a series of questions and get your results instantly.
      </Typography>
      <Button size="lg" onClick={handleStart} loading={isStartingTest} className={styles.cta}>
        Start the Test
      </Button>
    </section>
  );
}
