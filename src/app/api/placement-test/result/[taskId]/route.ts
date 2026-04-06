import { NextResponse } from 'next/server';
import { ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

interface RouteParams {
  params: Promise<{ taskId: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { taskId } = await params;

  // Mock result data
  return NextResponse.json({
    taskId,
    level: ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
    correctAnswers: 12,
    totalQuestions: 15,
    accuracy: 80,
  });
}
