import * as yup from 'yup';

export const answerSchema = yup.object({
  questionId: yup.string().required('Question ID is required'),
  answer: yup.string().required('Answer is required'),
});

export const testFormSchema = yup.object({
  answers: yup.lazy((value) =>
    yup.object(
      Object.keys((value as Record<string, unknown>) ?? {}).reduce(
        (acc, key) => ({ ...acc, [key]: answerSchema }),
        {} as Record<string, typeof answerSchema>
      )
    ).default({})
  ),
});

export type AnswerItem = yup.InferType<typeof answerSchema>;

export type TestFormValues = {
  answers: Record<string, AnswerItem>;
};
