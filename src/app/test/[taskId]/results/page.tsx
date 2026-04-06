import { ResultsContent } from '@/PagesContent/ResultsContent';

interface ResultsPageProps {
  params: Promise<{ taskId: string }>;
}

export default async function Results({ params }: ResultsPageProps) {
  const { taskId } = await params;
  return <ResultsContent taskId={taskId} />;
}
