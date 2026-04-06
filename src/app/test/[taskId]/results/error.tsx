'use client';

import { useEffect } from 'react';
import { ResultsError } from '@/PagesContent/ResultsContent/error';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ResultsError onRetry={unstable_retry} />;
}
