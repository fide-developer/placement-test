import * as yup from 'yup';

export const answerSchema = yup.object({
  questionId: yup.string().required('Question ID is required'),
  answer: yup.string().required('Answer is required'),
});

export const testFormSchema = yup.object({
  answers: yup.lazy(() =>
    yup.object().default({})
  ),
});

export type AnswerItem = yup.InferType<typeof answerSchema>;

export type TestFormValues = {
  answers: Record<string, AnswerItem>;
};
