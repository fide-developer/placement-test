import { useMutation } from '@tanstack/react-query';
import { ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

interface AnsweredQuestion {
  questionId: string;
  answerId: string;
}

interface SubmitTestPayload {
  answeredQuestions: AnsweredQuestion[];
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
}

interface SubmitTestResponse {
  passed: boolean;
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
  scorePercentage: number;
}

async function submitTest(payload: SubmitTestPayload): Promise<SubmitTestResponse> {
  const response = await fetch('/api/placement-test/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to submit test');
  }

  return response.json();
}

export function useSubmitTest() {
  return useMutation({
    mutationFn: submitTest,
  });
}

export type { SubmitTestPayload, SubmitTestResponse };
