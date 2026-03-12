import type { PokemonType } from './typeChart';
import { getAllTypes } from './typeChart';
import {
  getWeaknesses,
  getResistances,
  getImmunities,
} from './effectiveness';

export type QuestionCategory = 'weaknesses' | 'resistances' | 'immunities';

export interface Question {
  id: string;
  defendingTypes: [PokemonType] | [PokemonType, PokemonType];
  category: QuestionCategory;
  correctAnswers: PokemonType[];
}

export interface QuizState {
  currentQuestion: Question;
  selectedAnswers: PokemonType[];
  isAnswered: boolean;
  isCorrect: boolean;
}

/**
 * Generate a random question
 */
export const generateQuestion = (): Question => {
  const allTypes = getAllTypes();
  
  // Randomly decide if it's a single or dual type
  const isDualType = Math.random() > 0.5;
  
  let defendingTypes: [PokemonType] | [PokemonType, PokemonType];
  if (isDualType) {
    const type1 = allTypes[Math.floor(Math.random() * allTypes.length)];
    let type2 = allTypes[Math.floor(Math.random() * allTypes.length)];
    // Ensure type2 is different from type1
    while (type2 === type1) {
      type2 = allTypes[Math.floor(Math.random() * allTypes.length)];
    }
    defendingTypes = [type1, type2];
  } else {
    const type = allTypes[Math.floor(Math.random() * allTypes.length)];
    defendingTypes = [type];
  }

  // Randomly select a category
  const categories: QuestionCategory[] = [
    'weaknesses',
    'resistances',
    'immunities',
  ];
  const category =
    categories[Math.floor(Math.random() * categories.length)];

  // Get correct answers based on category
  let correctAnswers: PokemonType[];
  if (category === 'weaknesses') {
    correctAnswers = getWeaknesses(defendingTypes);
  } else if (category === 'resistances') {
    correctAnswers = getResistances(defendingTypes);
  } else {
    correctAnswers = getImmunities(defendingTypes);
  }

  // Generate question ID
  const id = `q_${Date.now()}_${Math.random()}`;

  return {
    id,
    defendingTypes,
    category,
    correctAnswers,
  };
};

/**
 * Generate a list of options for a question, mixing correct answers with distractors
 */
export const generateOptions = (
  correctAnswers: PokemonType[],
  count: number = 6
): PokemonType[] => {
  const allTypes = getAllTypes();

  if (correctAnswers.length >= count) {
    // If there are more correct answers than requested options, just return those
    return correctAnswers.slice(0, count);
  }

  // Get types that are NOT correct answers (potential distractors)
  const possibleDistractors = allTypes.filter(
    (type) => !correctAnswers.includes(type)
  );

  // Shuffle and select distractors
  const shuffled = possibleDistractors.sort(() => Math.random() - 0.5);
  const distractors = shuffled.slice(0, count - correctAnswers.length);

  // Combine and shuffle
  const options = [...correctAnswers, ...distractors].sort(
    () => Math.random() - 0.5
  );

  return options;
};

/**
 * Check if the user's answer is correct
 */
export const checkAnswer = (
  question: Question,
  selectedTypes: PokemonType[]
): boolean => {
  if (selectedTypes.length !== question.correctAnswers.length) {
    return false;
  }

  // Check if all selected types are in correct answers and vice versa
  const selectedSet = new Set(selectedTypes);
  const correctSet = new Set(question.correctAnswers);

  if (selectedSet.size !== correctSet.size) {
    return false;
  }

  for (const type of selectedSet) {
    if (!correctSet.has(type)) {
      return false;
    }
  }

  return true;
};

/**
 * Calculate a score based on questions and correct count
 */
export const getScore = (questions: number, correctCount: number): number => {
  if (questions === 0) return 0;
  return Math.round((correctCount / questions) * 100);
};
