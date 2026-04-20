import { describe, it, expect } from 'vitest';
import type { PokemonType } from '../core/types';
import { generateQuestion, generateOptions, checkAnswer, getScore } from '../core/types';

describe('Quiz Logic', () => {
  describe('generateQuestion', () => {
    it('should generate a question with valid defending types', () => {
      const question = generateQuestion();
      expect(question.defendingTypes).toBeDefined();
      expect(question.defendingTypes.length).toBeGreaterThanOrEqual(1);
      expect(question.defendingTypes.length).toBeLessThanOrEqual(2);
    });

    it('should have a valid category', () => {
      const question = generateQuestion();
      expect(['weaknesses', 'resistances', 'immunities']).toContain(question.category);
    });

    it('should have correct answers array', () => {
      const question = generateQuestion();
      expect(Array.isArray(question.correctAnswers)).toBe(true);
    });

    it('should have a unique ID', () => {
      const q1 = generateQuestion();
      const q2 = generateQuestion();
      expect(q1.id).not.toBe(q2.id);
    });
  });

  describe('generateOptions', () => {
    it('should return requested number of options', () => {
      const correctAnswers: PokemonType[] = ['Water'];
      const options = generateOptions(correctAnswers, 6);
      expect(options.length).toBe(6);
    });

    it('should include all correct answers', () => {
      const correctAnswers: PokemonType[] = ['Water', 'Ground'];
      const options = generateOptions(correctAnswers, 6);
      expect(options).toContain('Water');
      expect(options).toContain('Ground');
    });

    it('should return fewer options if correct answers exceed count', () => {
      const correctAnswers: PokemonType[] = ['Water', 'Ground', 'Rock', 'Electric', 'Ice', 'Grass', 'Fire'];
      const options = generateOptions(correctAnswers, 6);
      expect(options.length).toBe(6);
    });

    it('should have unique options', () => {
      const correctAnswers: PokemonType[] = ['Water'];
      const options = generateOptions(correctAnswers, 6);
      const uniqueOptions = new Set(options);
      expect(uniqueOptions.size).toBe(options.length);
    });
  });

  describe('checkAnswer', () => {
    it('should return true for correct answer', () => {
      const question = {
        id: 'test',
        defendingTypes: ['Fire'] as const,
        category: 'weaknesses' as const,
        correctAnswers: ['Water', 'Ground', 'Rock'],
      };
      const selectedTypes = ['Water', 'Ground', 'Rock'];
      expect(checkAnswer(question, selectedTypes)).toBe(true);
    });

    it('should return true regardless of order', () => {
      const question = {
        id: 'test',
        defendingTypes: ['Fire'] as const,
        category: 'weaknesses' as const,
        correctAnswers: ['Water', 'Ground', 'Rock'],
      };
      const selectedTypes = ['Rock', 'Water', 'Ground'];
      expect(checkAnswer(question, selectedTypes)).toBe(true);
    });

    it('should return false for incorrect answer', () => {
      const question = {
        id: 'test',
        defendingTypes: ['Fire'] as const,
        category: 'weaknesses' as const,
        correctAnswers: ['Water', 'Ground', 'Rock'],
      };
      const selectedTypes = ['Water', 'Electric'];
      expect(checkAnswer(question, selectedTypes)).toBe(false);
    });

    it('should return false if wrong number of answers', () => {
      const question = {
        id: 'test',
        defendingTypes: ['Fire'] as const,
        category: 'weaknesses' as const,
        correctAnswers: ['Water', 'Ground', 'Rock'],
      };
      const selectedTypes = ['Water', 'Ground'];
      expect(checkAnswer(question, selectedTypes)).toBe(false);
    });

    it('should return false if contains one wrong answer', () => {
      const question = {
        id: 'test',
        defendingTypes: ['Fire'] as const,
        category: 'weaknesses' as const,
        correctAnswers: ['Water', 'Ground', 'Rock'],
      };
      const selectedTypes = ['Water', 'Ground', 'Electric'];
      expect(checkAnswer(question, selectedTypes)).toBe(false);
    });
  });

  describe('getScore', () => {
    it('should return 100 for perfect score', () => {
      expect(getScore(10, 10)).toBe(100);
    });

    it('should return 0 for zero correct', () => {
      expect(getScore(10, 0)).toBe(0);
    });

    it('should return 50 for half correct', () => {
      expect(getScore(10, 5)).toBe(50);
    });

    it('should return 0 for zero questions', () => {
      expect(getScore(0, 0)).toBe(0);
    });

    it('should round correctly', () => {
      expect(getScore(3, 1)).toBe(33);
    });
  });

  describe('generateQuestion - constraints', () => {
    it('should always generate 1-6 correct answers', () => {
      for (let i = 0; i < 20; i++) {
        const question = generateQuestion();
        expect(question.correctAnswers.length).toBeGreaterThanOrEqual(1);
        expect(question.correctAnswers.length).toBeLessThanOrEqual(6);
      }
    });
  });

  describe('generateOptions - defaults', () => {
    it('should use 8 options by default', () => {
      const correctAnswers: PokemonType[] = ['Water'];
      const options = generateOptions(correctAnswers);
      expect(options.length).toBe(8);
    });
  });
});