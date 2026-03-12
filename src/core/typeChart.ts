export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Grass'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy';

export interface TypeData {
  weak_to: PokemonType[];
  resists: PokemonType[];
  immune_to: PokemonType[];
}

export type TypeChart = {
  [key in PokemonType]: TypeData;
};

const typeChartData: TypeChart = {
  Normal: {
    weak_to: ['Fighting'],
    resists: [],
    immune_to: ['Ghost'],
  },
  Fire: {
    weak_to: ['Water', 'Ground', 'Rock'],
    resists: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
    immune_to: [],
  },
  Water: {
    weak_to: ['Electric', 'Grass'],
    resists: ['Fire', 'Water', 'Ice', 'Steel'],
    immune_to: [],
  },
  Electric: {
    weak_to: ['Ground'],
    resists: ['Electric', 'Flying', 'Steel'],
    immune_to: [],
  },
  Grass: {
    weak_to: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
    resists: ['Water', 'Electric', 'Grass', 'Ground'],
    immune_to: [],
  },
  Ice: {
    weak_to: ['Fire', 'Fighting', 'Rock', 'Steel'],
    resists: ['Ice'],
    immune_to: [],
  },
  Fighting: {
    weak_to: ['Flying', 'Psychic', 'Fairy'],
    resists: ['Bug', 'Rock', 'Dark'],
    immune_to: [],
  },
  Poison: {
    weak_to: ['Ground', 'Psychic'],
    resists: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'],
    immune_to: [],
  },
  Ground: {
    weak_to: ['Water', 'Grass', 'Ice'],
    resists: ['Poison', 'Rock'],
    immune_to: ['Electric'],
  },
  Flying: {
    weak_to: ['Electric', 'Ice', 'Rock'],
    resists: ['Grass', 'Fighting', 'Bug'],
    immune_to: ['Ground'],
  },
  Psychic: {
    weak_to: ['Bug', 'Ghost', 'Dark'],
    resists: ['Fighting', 'Psychic'],
    immune_to: [],
  },
  Bug: {
    weak_to: ['Fire', 'Flying', 'Rock'],
    resists: ['Grass', 'Fighting', 'Ground'],
    immune_to: [],
  },
  Rock: {
    weak_to: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
    resists: ['Normal', 'Fire', 'Poison', 'Flying'],
    immune_to: [],
  },
  Ghost: {
    weak_to: ['Ghost', 'Dark'],
    resists: ['Poison', 'Bug'],
    immune_to: ['Normal', 'Fighting'],
  },
  Dragon: {
    weak_to: ['Ice', 'Dragon', 'Fairy'],
    resists: ['Fire', 'Water', 'Electric', 'Grass'],
    immune_to: [],
  },
  Dark: {
    weak_to: ['Fighting', 'Bug', 'Fairy'],
    resists: ['Ghost', 'Dark'],
    immune_to: ['Psychic'],
  },
  Steel: {
    weak_to: ['Fire', 'Fighting', 'Ground'],
    resists: [
      'Normal',
      'Grass',
      'Ice',
      'Flying',
      'Psychic',
      'Bug',
      'Rock',
      'Dragon',
      'Steel',
      'Fairy',
    ],
    immune_to: ['Poison'],
  },
  Fairy: {
    weak_to: ['Poison', 'Steel'],
    resists: ['Fighting', 'Bug', 'Dark'],
    immune_to: ['Dragon'],
  },
};

export const getAllTypes = (): PokemonType[] => {
  return Object.keys(typeChartData) as PokemonType[];
};

export const getTypeData = (type: PokemonType): TypeData => {
  const data = typeChartData[type];
  if (!data) {
    throw new Error(`Unknown type: ${type}`);
  }
  return data;
};

export const getTypeChart = (): TypeChart => {
  return typeChartData;
};
