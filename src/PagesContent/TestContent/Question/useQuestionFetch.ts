'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { getQuestion } from '@/api/test/get-question';
import { useSubmitTest } from '@/api/test/submit-test';
import { useProficiency } from './ProficiencyContext';
import { TestFormValues } from '../schema';

export function useQuestionFetch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { taskId } = useParams<{ taskId: string }>();
  const { difficulty, levelUp, isMaxLevel } = useProficiency();
  const { getValues } = useFormContext<TestFormValues>();

  const questionNumber = Number(searchParams.get('q')) || 1;

  const questionQuery = useQuery({
    queryKey: ['question', questionNumber, difficulty],
    queryFn: () => {
      const answersRecord = getValues('answers') ?? {};
      const currentAnswers = Object.values(answersRecord).filter(
        (a) => a.questionId && a.answer
      );
      return getQuestion({
        answeredQuestions: currentAnswers.map((a) => ({
          questionId: a.questionId,
          answerId: a.answer,
        })),
        difficulty,
      });
    },
    retry: false,
  });

  // Handle fetch error (no more questions at this difficulty) → evaluate
  const { mutateAsync: submitMutateAsync, isPending: isEvaluating } = useSubmitTest();
  const [hasHandledError, setHasHandledError] = useState(false);

  useEffect(() => {
    if (!questionQuery.isError || isEvaluating || hasHandledError) return;
    setHasHandledError(true);

    const evaluate = async () => {
      const answersRecord = getValues('answers') ?? {};
      const answers = Object.values(answersRecord).filter(
        (a) => a.questionId && a.answer
      );
      try {
        const result = await submitMutateAsync({
          answeredQuestions: answers.map((a) => ({
            questionId: a.questionId,
            answerId: a.answer,
          })),
          difficulty,
        });

        if (result.passed && !isMaxLevel) {
          levelUp();
          setHasHandledError(false);
          // Difficulty changed in context → query key changes → auto refetch
        } else {
          router.push(`/test/${taskId}/results`);
        }
      } catch {
        router.push(`/test/${taskId}/results`);
      }
    };

    evaluate();
  }, [questionQuery.isError]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    question: questionQuery.data ?? null,
    questionNumber,
    isPending: questionQuery.isPending || isEvaluating,
    isError: questionQuery.isError && !isEvaluating,
  };
}
