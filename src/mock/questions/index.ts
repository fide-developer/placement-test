export enum ENGLISH_SKILL_MASTERY_LEVEL {
  BEGINNER = 'BEGINNER',
  ELEMENTARY = 'ELEMENTARY',
  INTERMEDIATE = 'INTERMEDIATE',
  UPPER_INTERMEDIATE = 'UPPER_INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  PROFICIENT = 'PROFICIENT',
}

export interface QuestionOption {
  answerId: string;
  answerText: string;
}

export interface Question {
  questionId: number;
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
  description: string | null;
  question: string;
  options: QuestionOption[];
  score: number;
  correctAnswer: string;
}

export const questions: Question[] = [
  // ─── BEGINNER ───
  {
    questionId: 1,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.BEGINNER,
    description: 'Choose the correct word to complete the sentence.',
    question: 'She ___ a student.',
    options: [
      { answerId: '1a', answerText: 'is' },
      { answerId: '1b', answerText: 'am' },
      { answerId: '1c', answerText: 'are' },
      { answerId: '1d', answerText: 'be' },
    ],
    score: 5,
    correctAnswer: '1a',
  },
  {
    questionId: 2,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.BEGINNER,
    description: 'Choose the correct word to complete the sentence.',
    question: 'They ___ from Japan.',
    options: [
      { answerId: '2a', answerText: 'is' },
      { answerId: '2b', answerText: 'am' },
      { answerId: '2c', answerText: 'are' },
      { answerId: '2d', answerText: 'be' },
    ],
    score: 5,
    correctAnswer: '2c',
  },
  {
    questionId: 3,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.BEGINNER,
    description: 'Choose the correct word to complete the sentence.',
    question: 'I ___ a teacher.',
    options: [
      { answerId: '3a', answerText: 'is' },
      { answerId: '3b', answerText: 'am' },
      { answerId: '3c', answerText: 'are' },
      { answerId: '3d', answerText: 'be' },
    ],
    score: 5,
    correctAnswer: '3b',
  },
  {
    questionId: 4,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.BEGINNER,
    description: 'Choose the correct word to complete the sentence.',
    question: 'The cat ___ on the table.',
    options: [
      { answerId: '4a', answerText: 'is' },
      { answerId: '4b', answerText: 'am' },
      { answerId: '4c', answerText: 'are' },
      { answerId: '4d', answerText: 'be' },
    ],
    score: 5,
    correctAnswer: '4a',
  },
  {
    questionId: 5,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.BEGINNER,
    description: 'Choose the correct word to complete the sentence.',
    question: 'We ___ happy today.',
    options: [
      { answerId: '5a', answerText: 'is' },
      { answerId: '5b', answerText: 'am' },
      { answerId: '5c', answerText: 'are' },
      { answerId: '5d', answerText: 'be' },
    ],
    score: 5,
    correctAnswer: '5c',
  },

  // ─── ELEMENTARY ───
  {
    questionId: 6,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ELEMENTARY,
    description: 'Select the correct past tense form.',
    question: 'I ___ to the store yesterday.',
    options: [
      { answerId: '6a', answerText: 'go' },
      { answerId: '6b', answerText: 'went' },
      { answerId: '6c', answerText: 'gone' },
      { answerId: '6d', answerText: 'going' },
    ],
    score: 10,
    correctAnswer: '6b',
  },
  {
    questionId: 7,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ELEMENTARY,
    description: null,
    question: 'Which sentence is correct?',
    options: [
      { answerId: '7a', answerText: 'He don\'t like coffee.' },
      { answerId: '7b', answerText: 'He doesn\'t likes coffee.' },
      { answerId: '7c', answerText: 'He doesn\'t like coffee.' },
      { answerId: '7d', answerText: 'He not like coffee.' },
    ],
    score: 10,
    correctAnswer: '7c',
  },
  {
    questionId: 8,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ELEMENTARY,
    description: 'Choose the correct form.',
    question: 'She ___ her homework every day.',
    options: [
      { answerId: '8a', answerText: 'do' },
      { answerId: '8b', answerText: 'does' },
      { answerId: '8c', answerText: 'doing' },
      { answerId: '8d', answerText: 'done' },
    ],
    score: 10,
    correctAnswer: '8b',
  },
  {
    questionId: 9,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ELEMENTARY,
    description: 'Select the correct past tense form.',
    question: 'They ___ a movie last night.',
    options: [
      { answerId: '9a', answerText: 'watch' },
      { answerId: '9b', answerText: 'watched' },
      { answerId: '9c', answerText: 'watching' },
      { answerId: '9d', answerText: 'watches' },
    ],
    score: 10,
    correctAnswer: '9b',
  },
  {
    questionId: 10,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ELEMENTARY,
    description: 'Choose the correct word.',
    question: 'There ___ many people at the park.',
    options: [
      { answerId: '10a', answerText: 'is' },
      { answerId: '10b', answerText: 'was' },
      { answerId: '10c', answerText: 'were' },
      { answerId: '10d', answerText: 'been' },
    ],
    score: 10,
    correctAnswer: '10c',
  },

  // ─── INTERMEDIATE ───
  {
    questionId: 11,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
    description: 'Choose the correct form to complete the sentence.',
    question: 'If I ___ more time, I would travel the world.',
    options: [
      { answerId: '11a', answerText: 'have' },
      { answerId: '11b', answerText: 'had' },
      { answerId: '11c', answerText: 'has' },
      { answerId: '11d', answerText: 'having' },
    ],
    score: 15,
    correctAnswer: '11b',
  },
  {
    questionId: 12,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
    description: null,
    question: 'The book ___ by millions of people since it was published.',
    options: [
      { answerId: '12a', answerText: 'has been read' },
      { answerId: '12b', answerText: 'was read' },
      { answerId: '12c', answerText: 'is read' },
      { answerId: '12d', answerText: 'had read' },
    ],
    score: 15,
    correctAnswer: '12a',
  },
  {
    questionId: 13,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
    description: 'Choose the correct relative pronoun.',
    question: 'The woman ___ lives next door is a doctor.',
    options: [
      { answerId: '13a', answerText: 'which' },
      { answerId: '13b', answerText: 'who' },
      { answerId: '13c', answerText: 'whom' },
      { answerId: '13d', answerText: 'whose' },
    ],
    score: 15,
    correctAnswer: '13b',
  },
  {
    questionId: 14,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
    description: 'Select the correct answer.',
    question: 'By the time we arrived, the movie ___.',
    options: [
      { answerId: '14a', answerText: 'already started' },
      { answerId: '14b', answerText: 'had already started' },
      { answerId: '14c', answerText: 'has already started' },
      { answerId: '14d', answerText: 'was already starting' },
    ],
    score: 15,
    correctAnswer: '14b',
  },
  {
    questionId: 15,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
    description: 'Choose the correct form.',
    question: 'I wish I ___ speak French fluently.',
    options: [
      { answerId: '15a', answerText: 'can' },
      { answerId: '15b', answerText: 'could' },
      { answerId: '15c', answerText: 'will' },
      { answerId: '15d', answerText: 'would' },
    ],
    score: 15,
    correctAnswer: '15b',
  },

  // ─── UPPER INTERMEDIATE ───
  {
    questionId: 16,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.UPPER_INTERMEDIATE,
    description: 'Select the most appropriate word.',
    question: 'Despite ___ tired, she continued working on the project.',
    options: [
      { answerId: '16a', answerText: 'to be' },
      { answerId: '16b', answerText: 'being' },
      { answerId: '16c', answerText: 'been' },
      { answerId: '16d', answerText: 'was' },
    ],
    score: 20,
    correctAnswer: '16b',
  },
  {
    questionId: 17,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.UPPER_INTERMEDIATE,
    description: null,
    question: 'Not only ___ the exam, but she also got the highest score.',
    options: [
      { answerId: '17a', answerText: 'she passed' },
      { answerId: '17b', answerText: 'did she pass' },
      { answerId: '17c', answerText: 'she did pass' },
      { answerId: '17d', answerText: 'passed she' },
    ],
    score: 20,
    correctAnswer: '17b',
  },
  {
    questionId: 18,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.UPPER_INTERMEDIATE,
    description: 'Choose the correct option.',
    question: 'Had I known about the meeting, I ___ attended.',
    options: [
      { answerId: '18a', answerText: 'will have' },
      { answerId: '18b', answerText: 'would have' },
      { answerId: '18c', answerText: 'could' },
      { answerId: '18d', answerText: 'should' },
    ],
    score: 20,
    correctAnswer: '18b',
  },
  {
    questionId: 19,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.UPPER_INTERMEDIATE,
    description: 'Select the correct phrase.',
    question: 'The project needs ___ by Friday.',
    options: [
      { answerId: '19a', answerText: 'to complete' },
      { answerId: '19b', answerText: 'completing' },
      { answerId: '19c', answerText: 'to be completed' },
      { answerId: '19d', answerText: 'being completed' },
    ],
    score: 20,
    correctAnswer: '19c',
  },
  {
    questionId: 20,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.UPPER_INTERMEDIATE,
    description: 'Choose the correct word.',
    question: 'She speaks English ___ she were a native speaker.',
    options: [
      { answerId: '20a', answerText: 'as if' },
      { answerId: '20b', answerText: 'like' },
      { answerId: '20c', answerText: 'even though' },
      { answerId: '20d', answerText: 'despite' },
    ],
    score: 20,
    correctAnswer: '20a',
  },

  // ─── ADVANCED ───
  {
    questionId: 21,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ADVANCED,
    description: 'Choose the word that best completes the sentence.',
    question: 'The politician\'s speech was deliberately ___, making it difficult to determine his actual position.',
    options: [
      { answerId: '21a', answerText: 'ambiguous' },
      { answerId: '21b', answerText: 'ambitious' },
      { answerId: '21c', answerText: 'amicable' },
      { answerId: '21d', answerText: 'amenable' },
    ],
    score: 25,
    correctAnswer: '21a',
  },
  {
    questionId: 22,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ADVANCED,
    description: 'Select the correct option.',
    question: 'Rarely ___ such a compelling argument in academic literature.',
    options: [
      { answerId: '22a', answerText: 'one finds' },
      { answerId: '22b', answerText: 'does one find' },
      { answerId: '22c', answerText: 'one does find' },
      { answerId: '22d', answerText: 'finds one' },
    ],
    score: 25,
    correctAnswer: '22b',
  },
  {
    questionId: 23,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ADVANCED,
    description: 'Choose the most appropriate word.',
    question: 'The evidence was entirely ___, relying on rumour rather than verifiable facts.',
    options: [
      { answerId: '23a', answerText: 'anecdotal' },
      { answerId: '23b', answerText: 'analytical' },
      { answerId: '23c', answerText: 'analogous' },
      { answerId: '23d', answerText: 'anomalous' },
    ],
    score: 25,
    correctAnswer: '23a',
  },
  {
    questionId: 24,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ADVANCED,
    description: null,
    question: 'The researchers\' findings ___ those of earlier studies, suggesting a pattern.',
    options: [
      { answerId: '24a', answerText: 'corroborated' },
      { answerId: '24b', answerText: 'contradicted' },
      { answerId: '24c', answerText: 'confiscated' },
      { answerId: '24d', answerText: 'consolidated' },
    ],
    score: 25,
    correctAnswer: '24a',
  },
  {
    questionId: 25,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.ADVANCED,
    description: 'Choose the correct form.',
    question: 'So intense ___ the heat that the road surface began to melt.',
    options: [
      { answerId: '25a', answerText: 'it was' },
      { answerId: '25b', answerText: 'was' },
      { answerId: '25c', answerText: 'had been' },
      { answerId: '25d', answerText: 'being' },
    ],
    score: 25,
    correctAnswer: '25b',
  },

  // ─── PROFICIENT ───
  {
    questionId: 26,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.PROFICIENT,
    description: null,
    question: 'Had the committee ___ the proposal more thoroughly, the oversight would have been detected.',
    options: [
      { answerId: '26a', answerText: 'scrutinized' },
      { answerId: '26b', answerText: 'scrutinize' },
      { answerId: '26c', answerText: 'scrutinizing' },
      { answerId: '26d', answerText: 'been scrutinized' },
    ],
    score: 30,
    correctAnswer: '26a',
  },
  {
    questionId: 27,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.PROFICIENT,
    description: 'Choose the word that best fits the context.',
    question: 'The author\'s use of ___ throughout the novel serves to underscore the theme of societal decay.',
    options: [
      { answerId: '27a', answerText: 'allegory' },
      { answerId: '27b', answerText: 'alliteration' },
      { answerId: '27c', answerText: 'allusion' },
      { answerId: '27d', answerText: 'anaphora' },
    ],
    score: 30,
    correctAnswer: '27a',
  },
  {
    questionId: 28,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.PROFICIENT,
    description: null,
    question: 'The diplomat\'s remarks, while ostensibly ___, were in fact a carefully veiled critique of the administration.',
    options: [
      { answerId: '28a', answerText: 'conciliatory' },
      { answerId: '28b', answerText: 'confrontational' },
      { answerId: '28c', answerText: 'perfunctory' },
      { answerId: '28d', answerText: 'supercilious' },
    ],
    score: 30,
    correctAnswer: '28a',
  },
  {
    questionId: 29,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.PROFICIENT,
    description: 'Select the correct option.',
    question: 'It is imperative that every delegate ___ present at the opening session.',
    options: [
      { answerId: '29a', answerText: 'is' },
      { answerId: '29b', answerText: 'be' },
      { answerId: '29c', answerText: 'was' },
      { answerId: '29d', answerText: 'were' },
    ],
    score: 30,
    correctAnswer: '29b',
  },
  {
    questionId: 30,
    difficulty: ENGLISH_SKILL_MASTERY_LEVEL.PROFICIENT,
    description: 'Choose the most precise word.',
    question: 'The CEO\'s decision to ___ the merger proved prescient when the partner company declared bankruptcy months later.',
    options: [
      { answerId: '30a', answerText: 'forestall' },
      { answerId: '30b', answerText: 'facilitate' },
      { answerId: '30c', answerText: 'formulate' },
      { answerId: '30d', answerText: 'fabricate' },
    ],
    score: 30,
    correctAnswer: '30a',
  },
];
