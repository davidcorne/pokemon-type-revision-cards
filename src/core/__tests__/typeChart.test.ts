import { describe, it, expect } from 'vitest';
import { getAllTypes, getTypeData, getTypeChart } from '../typeChart';

describe('typeChart', () => {
  describe('getAllTypes', () => {
    it('should return exactly 18 types', () => {
      const types = getAllTypes();
      expect(types.length).toBe(18);
    });

    it('should include all expected types', () => {
      const types = getAllTypes();
      const expectedTypes = [
        'Normal',
        'Fire',
        'Water',
        'Electric',
        'Grass',
        'Ice',
        'Fighting',
        'Poison',
        'Ground',
        'Flying',
        'Psychic',
        'Bug',
        'Rock',
        'Ghost',
        'Dragon',
        'Dark',
        'Steel',
        'Fairy',
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
      expect(types1).not.toBe(types2); // different array objects
    });
  });

  describe('getTypeData', () => {
    it('should throw for invalid type', () => {
      expect(() => getTypeData('Invalid' as any)).toThrow('Unknown type');
    });

    it('should return data for all valid types', () => {
      getAllTypes().forEach((type) => {
        const data = getTypeData(type);
        expect(data).toBeDefined();
        expect(data.weak_to).toBeDefined();
        expect(data.resists).toBeDefined();
        expect(data.immune_to).toBeDefined();
      });
    });
  });

  describe('Type chart data integrity', () => {
    it('should only reference valid types in relationships', () => {
      const validTypes = new Set(getAllTypes());
      const typeChart = getTypeChart();

      Object.entries(typeChart).forEach(([_, data]) => {
        [...data.weak_to, ...data.resists, ...data.immune_to].forEach(
          (refType) => {
            expect(validTypes.has(refType)).toBe(true);
          }
        );
      });
    });
  });
});
