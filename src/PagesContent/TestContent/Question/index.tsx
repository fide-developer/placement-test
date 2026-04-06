'use client';

import { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { Typography } from '@/components/Typography';
import { Radio } from '@/components/RadioButton';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { useQuestionFetch } from './useQuestionFetch';
import { QuestionLoading } from './loading';
import { QuestionError } from './error';
import { TestFormValues } from '../schema';
import styles from './style.module.scss';

interface QuestionProps {
  isProcessing: boolean;
}

export function Question({ isProcessing }: QuestionProps) {
  const { question, questionNumber, isPending, isError } = useQuestionFetch();
  const { control, setValue, getValues } = useFormContext<TestFormValues>();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('q')) || 1;
  const needsToEvaluateLevel: boolean = currentPage % 5 === 0

  useEffect(() => {
    const existing = getValues(`answers.${currentPage}` as `answers.${string}`);
    if (!existing?.answer) {
      setValue(`answers.${currentPage}.answer` as `answers.${string}.answer`, '', { shouldValidate: false });
      setValue(`answers.${currentPage}.questionId` as `answers.${string}.questionId`, '', { shouldValidate: false });
    }
  }, [currentPage, getValues, setValue]);

  const loading = isPending || isProcessing;

  if (loading && !question) {
    return <QuestionLoading />;
  }

  if (isError || !question) {
    return <QuestionError />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Badge>{question.difficulty.replace(/_/g, ' ')}</Badge>
        <Typography variant="h3">
          Question {questionNumber}
        </Typography>
        {question.description && (
          <Typography variant="bodySmall" color="muted">
            {question.description}
          </Typography>
        )}
      </div>

      <Typography variant="body" className={styles.questionText}>
        {question.question}
      </Typography>

      <Controller
        name={`answers.${currentPage}.answer` as `answers.${string}.answer`}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Radio.Group
              name={field.name}
              value={field.value ?? ''}
              error={!!fieldState.error}
              onChange={(value: string) => {
                field.onChange(value);
                setValue(
                  `answers.${currentPage}.questionId` as `answers.${string}.questionId`,
                  String(question.questionId)
                );
              }}
              direction="vertical"
            >
              {question.options.map((option) => (
                <Radio
                  key={option.answerId}
                  label={option.answerText}
                  value={option.answerId}
                />
              ))}
            </Radio.Group>
            <Radio.ErrorMessage>
              {fieldState.error?.message}
            </Radio.ErrorMessage>
          </>
        )}
      />

      <Button
        type="submit"
        loading={loading}
      >
        {needsToEvaluateLevel ? "Submit" : "Next"}
      </Button>
    </div>
  );
}
