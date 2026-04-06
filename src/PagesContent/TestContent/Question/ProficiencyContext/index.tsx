'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ENGLISH_SKILL_MASTERY_LEVEL } from '@/mock/questions';

const LEVEL_ORDER: ENGLISH_SKILL_MASTERY_LEVEL[] = [
  ENGLISH_SKILL_MASTERY_LEVEL.BEGINNER,
  ENGLISH_SKILL_MASTERY_LEVEL.ELEMENTARY,
  ENGLISH_SKILL_MASTERY_LEVEL.INTERMEDIATE,
  ENGLISH_SKILL_MASTERY_LEVEL.UPPER_INTERMEDIATE,
  ENGLISH_SKILL_MASTERY_LEVEL.ADVANCED,
  ENGLISH_SKILL_MASTERY_LEVEL.PROFICIENT,
];

interface ProficiencyContextValue {
  difficulty: ENGLISH_SKILL_MASTERY_LEVEL;
  levelUp: () => ENGLISH_SKILL_MASTERY_LEVEL | null;
  isMaxLevel: boolean;
}

const ProficiencyContext = createContext<ProficiencyContextValue | null>(null);

export function useProficiency() {
  const context = useContext(ProficiencyContext);
  if (!context) {
    throw new Error('useProficiency must be used within <ProficiencyProvider>');
  }
  return context;
}

interface ProficiencyProviderProps {
  children: ReactNode;
}

export function ProficiencyProvider({ children }: ProficiencyProviderProps) {
  const [levelIndex, setLevelIndex] = useState(0);

  const difficulty = LEVEL_ORDER[levelIndex];
  const isMaxLevel = levelIndex >= LEVEL_ORDER.length - 1;

  const levelUp = useCallback(() => {
    if (isMaxLevel) return null;
    const nextIndex = levelIndex + 1;
    setLevelIndex(nextIndex);
    return LEVEL_ORDER[nextIndex];
  }, [isMaxLevel, levelIndex]);

  return (
    <ProficiencyContext.Provider value={{ difficulty, levelUp, isMaxLevel }}>
      {children}
    </ProficiencyContext.Provider>
  );
}

export { LEVEL_ORDER };
