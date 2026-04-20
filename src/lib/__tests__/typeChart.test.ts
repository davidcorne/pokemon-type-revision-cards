import { describe, it, expect } from 'vitest';
import { getAllTypes, getTypeData } from '../core/types';

describe('typeChart', () => {
  describe('getAllTypes', () => {
    it('should return exactly 18 types', () => {
      const types = getAllTypes();
      expect(types.length).toBe(18);
    });

    it('should include all expected types', () => {
      const types = getAllTypes();
      const expectedTypes = [
        'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
        'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
        'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy',
      ];
      expectedTypes.forEach((type) => {
        expect(types).toContain(type);
      });
    });

    it('should return consistent results', () => {
      const types1 = getAllTypes();
      const types2 = getAllTypes();
      expect(types1).toEqual(types2);
    });

    it('should return a copy (immutability)', () => {
      const types1 = getAllTypes();
      const types2 = getAllTypes();
      expect(types1).not.toBe(types2);
    });
  });

  describe('getTypeData', () => {
    it('should throw for invalid type', () => {
      expect(() => getTypeData('Invalid' as any)).toThrow('Unknown type');
    });
  });
});