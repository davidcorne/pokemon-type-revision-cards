import { describe, it, expect } from 'vitest';
import { getWeaknesses, getResistances, getImmunities } from '../core/types';

describe('Effectiveness', () => {
  describe('getWeaknesses', () => {
    it('should return super effective types for single type Fire', () => {
      const weaknesses = getWeaknesses(['Fire']);
      expect(weaknesses).toContain('Water');
      expect(weaknesses).toContain('Ground');
      expect(weaknesses).toContain('Rock');
    });

    it('should return super effective types for single type Grass', () => {
      const weaknesses = getWeaknesses(['Grass']);
      expect(weaknesses).toContain('Fire');
      expect(weaknesses).toContain('Ice');
      expect(weaknesses).toContain('Poison');
      expect(weaknesses).toContain('Flying');
      expect(weaknesses).toContain('Bug');
    });

    it('should handle dual type weaknesses', () => {
      const weaknesses = getWeaknesses(['Fire', 'Flying']);
      expect(weaknesses).toContain('Water');
      expect(weaknesses).toContain('Electric');
      expect(weaknesses).toContain('Rock');
    });
  });

  describe('getResistances', () => {
    it('should return resisted types for single type Fire', () => {
      const resistances = getResistances(['Fire']);
      expect(resistances).toContain('Fire');
      expect(resistances).toContain('Grass');
      expect(resistances).toContain('Ice');
      expect(resistances).toContain('Bug');
      expect(resistances).toContain('Steel');
      expect(resistances).toContain('Fairy');
    });

    it('should return resisted types for single type Water', () => {
      const resistances = getResistances(['Water']);
      expect(resistances).toContain('Fire');
      expect(resistances).toContain('Water');
      expect(resistances).toContain('Ice');
      expect(resistances).toContain('Steel');
    });

    it('should handle dual type resistances', () => {
      const resistances = getResistances(['Water', 'Steel']);
      expect(resistances.length).toBeGreaterThan(0);
    });
  });

  describe('getImmunities', () => {
    it('should return immune types for Normal', () => {
      const immunities = getImmunities(['Normal']);
      expect(immunities).toContain('Ghost');
    });

    it('should return empty array when no immunities', () => {
      const immunities = getImmunities(['Fire']);
      expect(immunities.length).toBe(0);
    });

    it('should return immune types for Ground', () => {
      const immunities = getImmunities(['Ground']);
      expect(immunities).toContain('Electric');
    });

    it('should handle dual type immunities', () => {
      const immunities = getImmunities(['Ghost', 'Flying']);
      expect(immunities).toContain('Ground');
    });
  });
});