import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

interface TestResult {
  taskId: string;
  level: ENGLISH_SKILL_MASTERY_LEVEL;
  correctAnswers: number;
  totalQuestions: number;
  accuracy: number;
}

async function getResult(taskId: string): Promise<TestResult> {
  const response = await fetch(`/api/placement-test/result/${taskId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch result');
  }

  return response.json();
}

export function useGetResult() {
  const { taskId } = useParams<{ taskId: string }>();

  return useQuery({
    queryKey: ['result', taskId],
    queryFn: () => getResult(taskId),
    enabled: !!taskId,
  });
}

export type { TestResult };
