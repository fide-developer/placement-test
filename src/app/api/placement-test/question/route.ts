import { NextResponse } from 'next/server';
import { questions, ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

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

  const answeredIds = new Set(answeredQuestions.map((a) => a.questionId));

  const levelQuestions = questions.filter((q) => q.difficulty === difficulty);
  const nextQuestion = levelQuestions.find(
    (q) => !answeredIds.has(String(q.questionId))
  );

  if (!nextQuestion) {
    return NextResponse.json(
      { error: 'No more questions available at this difficulty' },
      { status: 404 }
    );
  }
  
  const questionData = {
    questionId: nextQuestion.questionId,
    difficulty: nextQuestion.difficulty,
    description: nextQuestion.description,
    question: nextQuestion.question,
    options: nextQuestion.options,
}

  return NextResponse.json(questionData);
}
