'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { TestFormProvider } from './TestFormProvider';
import { Question } from './Question';
import { ProficiencyProvider, useProficiency } from './Question/ProficiencyContext';
import { useSubmitTest } from '@/api/test/submit-test';
import { TestFormValues } from './schema';

const EVALUATION_INTERVAL = 5;

interface TestContentProps {
  taskId: string;
}

export function TestContent({ taskId }: TestContentProps) {
  return (
    <ProficiencyProvider>
      <TestFormProvider>
        <TestContentForm taskId={taskId} />
      </TestFormProvider>
    </ProficiencyProvider>
  );
}

function TestContentForm({ taskId }: TestContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { difficulty, levelUp, isMaxLevel } = useProficiency();
  const { handleSubmit } = useFormContext<TestFormValues>();
  const { mutateAsync } = useSubmitTest();

  const [isProcessing, setIsProcessing] = useState(false);
  const questionNumber = Number(searchParams.get('q')) || 1;

  useEffect(() => {
    setIsProcessing(false);
  }, [questionNumber]);

  const navigateToQuestion = useCallback(
    (num: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('q', String(num));
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const onSubmit = useCallback(
    async (data: TestFormValues) => {
      if (isProcessing) return;
      setIsProcessing(true);

      try {
        const allAnswers = Object.values(data.answers ?? {}).filter(
          (a) => a.questionId && a.answer
        );

        if (questionNumber % EVALUATION_INTERVAL !== 0) {
          navigateToQuestion(questionNumber + 1);
          return;
        }

        const result = await mutateAsync({
          answeredQuestions: allAnswers.map((a) => ({
            questionId: a.questionId,
            answerId: a.answer,
          })),
          difficulty,
        });

        if (!result.passed || isMaxLevel) {
          router.push(`/test/${taskId}/results`);
          return;
        }

        levelUp();
        navigateToQuestion(questionNumber + 1);
      } catch {
        setIsProcessing(false);
      }
    },
    [isProcessing, questionNumber, difficulty, isMaxLevel, levelUp, mutateAsync, navigateToQuestion, router, taskId]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Question isProcessing={isProcessing} />
    </form>
  );
}
