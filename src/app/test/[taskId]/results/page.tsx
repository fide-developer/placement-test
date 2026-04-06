import { ResultsContent } from '@/PagesContent/ResultsContent';
import type { TestResult } from '@/api/test/get-result';

interface PageProps {
  params: Promise<{ taskId: string }>;
}

async function getResult(taskId: string): Promise<TestResult> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/placement-test/result/${taskId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch result');
  }

  return response.json();
}

export default async function Results({ params }: PageProps) {
  const { taskId } = await params;
  const result = await getResult(taskId);

  return <ResultsContent result={result} />;
}
