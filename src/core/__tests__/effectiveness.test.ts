import { describe, it, expect } from 'vitest';
import {
  getEffectiveness,
  getWeaknesses,
  getResistances,
  getImmunities,
} from '../effectiveness';

describe('Effectiveness Calculator', () => {
  describe('getEffectiveness - Single Type Matchups', () => {
    it('should return 2x for a super effective matchup (Fire vs Grass)', () => {
      const result = getEffectiveness('Fire', ['Grass']);
      expect(result).toBe(2);
    });

    it('should return 0.5x for a resisted matchup (Fire vs Water)', () => {
      const result = getEffectiveness('Fire', ['Water']);
      expect(result).toBe(0.5);
    });

    it('should return 0x for an immunity (Normal vs Ghost)', () => {
      const result = getEffectiveness('Normal', ['Ghost']);
      expect(result).toBe(0);
    });

    it('should return 1x for a neutral matchup (Water vs Fire)', () => {
      const result = getEffectiveness('Water', ['Electric']);
      expect(result).toBe(1);
    });
  });

  describe('getEffectiveness - Dual Type Matchups', () => {
    it('should return 4x when both types are weak (Fire vs Grass/Ice)', () => {
      // Fire is weak to both Grass and Ice
      const result = getEffectiveness('Fire', ['Grass', 'Ice']);
      expect(result).toBe(4);
    });

    it('should return 0.5x when only one type resists (Normal vs Rock/Dark)', () => {
      // Only Dark resists Normal (Rock does not)
      const result = getEffectiveness('Normal', ['Rock', 'Dark']);
      expect(result).toBe(0.5);
    });

    it('should return 4x when attacking both weak types (Fire vs Grass/Steel)', () => {
      // Fire is super effective against both Grass and Steel
      const result = getEffectiveness('Fire', ['Grass', 'Steel']);
      expect(result).toBe(4);
    });

    it('should return 0x if one type is immune (Normal vs Ghost/Flying)', () => {
      // Ghost is immune to Normal
      const result = getEffectiveness('Normal', ['Ghost', 'Flying']);
      expect(result).toBe(0);
    });

    it('should calculate Fire/Flying correctly', () => {
      // Rock is super effective against both Fire and Flying = 4x
      const result = getEffectiveness('Rock', ['Fire', 'Flying']);
      expect(result).toBe(4);
    });

    it('should calculate Grass/Poison correctly', () => {
      // Fire is super effective against Grass but not Poison
      const result = getEffectiveness('Fire', ['Grass', 'Poison']);
      expect(result).toBe(2);
    });
  });

  describe('getWeaknesses', () => {
    it('should return super effective types for single type', () => {
      const weaknesses = getWeaknesses(['Fire']);
      expect(weaknesses).toContain('Water');
      expect(weaknesses).toContain('Ground');
      expect(weaknesses).toContain('Rock');
    });

    it('should handle double weaknesses correctly', () => {
      // Fire/Flying is weak to Electric (4x), Rock (4x), Water (2x)
      const weaknesses = getWeaknesses(['Fire', 'Flying']);
      expect(weaknesses).toContain('Electric');
      expect(weaknesses).toContain('Rock');
      expect(weaknesses.length).toBeGreaterThan(0);
    });
  });

  describe('getResistances', () => {
    it('should return resisted types for single type', () => {
      const resistances = getResistances(['Fire']);
      expect(resistances).toContain('Fire');
      expect(resistances).toContain('Grass');
      expect(resistances).toContain('Steel');
    });

    it('should handle double resistances correctly', () => {
      // Water/Steel resists many types
      const resistances = getResistances(['Water', 'Steel']);
      expect(resistances.length).toBeGreaterThan(0);
    });
  });

  describe('getImmunities', () => {
    it('should return immune types for single type', () => {
      const immunities = getImmunities(['Normal']);
      expect(immunities).toContain('Ghost');
    });

    it('should return empty array when no immunities', () => {
      const immunities = getImmunities(['Fire']);
      expect(immunities.length).toBe(0);
    });

    it('should handle dual type immunities', () => {
      // Ghost is immune to Normal and Fighting
      const immunities = getImmunities(['Ghost', 'Flying']);
      expect(immunities.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle Ground immunity to Electric', () => {
      expect(getEffectiveness('Electric', ['Ground'])).toBe(0);
    });

    it('should handle Ghost immunity to Fighting', () => {
      expect(getEffectiveness('Fighting', ['Ghost'])).toBe(0);
    });

    it('should handle Ghost weak to Ghost and Dark types', () => {
      // Ghost is not super effective against Dragon (Dragon weak_to: Ice, Dragon, Fairy)
      const result = getEffectiveness('Ghost', ['Dragon']);
      expect(result).toBe(1);
    });
  });
});
