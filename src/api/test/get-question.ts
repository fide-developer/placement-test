import { useMutation } from '@tanstack/react-query';
import { ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

interface QuestionOption {
  answerId: string;
  answerText: string;
}

interface QuestionData {
  questionId: number;
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
  description: string | null;
  question: string;
  options: QuestionOption[];
}

interface AnsweredQuestion {
  questionId: string;
  answerId: string;
}

interface GetQuestionPayload {
  answeredQuestions: AnsweredQuestion[];
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
}

export async function getQuestion(payload: GetQuestionPayload): Promise<QuestionData> {
  const response = await fetch('/api/placement-test/question', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch question');
  }

  return response.json();
}

export function useGetQuestion() {
  return useMutation({
    mutationFn: getQuestion,
  });
}

export type { QuestionData, QuestionOption, AnsweredQuestion, GetQuestionPayload };
