import type { PokemonType } from './typeChart';
import { getTypeData } from './typeChart';

export type Effectiveness = 0 | 0.25 | 0.5 | 1 | 2 | 4;

/**
 * Calculate the effectiveness of an attacking type against one or two defending types
 * @param attackingType The type doing the damage
 * @param defendingTypes One or two types of the defending Pokemon
 * @returns Effectiveness multiplier: 0, 0.25, 0.5, 1, 2, or 4
 */
export const getEffectiveness = (
  attackingType: PokemonType,
  defendingTypes: [PokemonType] | [PokemonType, PokemonType]
): Effectiveness => {
  let multiplier: Effectiveness = 1;

  for (const defendingType of defendingTypes) {
    const defendingData = getTypeData(defendingType);

    // Check immunities (0x)
    if (defendingData.immune_to.includes(attackingType)) {
      multiplier = (multiplier * 0) as Effectiveness;
    }
    // Check resistances (0.5x)
    else if (defendingData.resists.includes(attackingType)) {
      multiplier = (multiplier * 0.5) as Effectiveness;
    }
    // Check weaknesses (2x)
    else if (defendingData.weak_to.includes(attackingType)) {
      multiplier = (multiplier * 2) as Effectiveness;
    }
  }

  return multiplier;
};

/**
 * Get all types that are super effective (2x or 4x) against the defending type(s)
 */
export const getWeaknesses = (
  defendingTypes: [PokemonType] | [PokemonType, PokemonType]
): PokemonType[] => {
  const allTypes: PokemonType[] = [
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

  return allTypes.filter((attackType) => {
    const effectiveness = getEffectiveness(attackType, defendingTypes);
    return effectiveness === 2 || effectiveness === 4;
  });
};

/**
 * Get all types that are not very effective (0.5x or 0.25x) against the defending type(s)
 */
export const getResistances = (
  defendingTypes: [PokemonType] | [PokemonType, PokemonType]
): PokemonType[] => {
  const allTypes: PokemonType[] = [
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

  return allTypes.filter((attackType) => {
    const effectiveness = getEffectiveness(attackType, defendingTypes);
    return effectiveness === 0.5 || effectiveness === 0.25;
  });
};

/**
 * Get all types that deal 0 damage (immunities) against the defending type(s)
 */
export const getImmunities = (
  defendingTypes: [PokemonType] | [PokemonType, PokemonType]
): PokemonType[] => {
  const allTypes: PokemonType[] = [
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

  return allTypes.filter((attackType) => {
    const effectiveness = getEffectiveness(attackType, defendingTypes);
    return effectiveness === 0;
  });
};
