import { NextResponse } from 'next/server';
import { questions, ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

const PASS_THRESHOLD = 0.85;

interface AnsweredQuestion {
  questionId: string;
  answerId: string;
}

interface RequestBody {
  answeredQuestions: AnsweredQuestion[];
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const { answeredQuestions = [], difficulty } = body;

  const levelQuestions = questions.filter((q) => q.difficulty === difficulty);

  const maxScore = levelQuestions.reduce((sum, q) => sum + q.score, 0);
  const userScore = levelQuestions.reduce((sum, q) => {
    const userAnswer = answeredQuestions.find(
      (a) => a.questionId === String(q.questionId)
    );
    return sum + (userAnswer?.answerId === q.correctAnswer ? q.score : 0);
  }, 0);

  const percentage = maxScore > 0 ? userScore / maxScore : 0;
  const scorePercentage = Math.round(percentage * 100);

  if (percentage >= PASS_THRESHOLD) {
    return NextResponse.json({
      passed: true,
      difficulty,
      scorePercentage,
    });
  }

  return NextResponse.json({
    passed: false,
    difficulty,
    scorePercentage,
  });
}
