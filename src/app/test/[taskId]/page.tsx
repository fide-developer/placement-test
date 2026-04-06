import { TestContent } from '@/PagesContent/TestContent';

interface TestPageProps {
  params: Promise<{ taskId: string }>;
}

export default async function Test({ params }: TestPageProps) {
  const { taskId } = await params;
  return <TestContent taskId={taskId} />;
}
