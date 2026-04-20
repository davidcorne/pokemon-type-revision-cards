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

export const allTypes: PokemonType[] = [
  'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
  'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
  'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'
];

export const getAllTypes = (): PokemonType[] => [...allTypes];

export interface TypeStyle {
  color: string;
  bgColor: string;
  textColor: string;
}

const typeColors: Record<PokemonType, TypeStyle> = {
  Normal: { color: '#A8A878', bgColor: '#E8E8D8', textColor: '#000000' },
  Fire: { color: '#F08030', bgColor: '#FFCCCC', textColor: '#000000' },
  Water: { color: '#6890F0', bgColor: '#CCE6FF', textColor: '#000000' },
  Electric: { color: '#F8D030', bgColor: '#FFFFCC', textColor: '#000000' },
  Grass: { color: '#78C850', bgColor: '#CCFFCC', textColor: '#000000' },
  Ice: { color: '#98D8D8', bgColor: '#E8F8F8', textColor: '#000000' },
  Fighting: { color: '#C03028', bgColor: '#FFE8CC', textColor: '#FFFFFF' },
  Poison: { color: '#A040A0', bgColor: '#E8CCFF', textColor: '#FFFFFF' },
  Ground: { color: '#E0C068', bgColor: '#FFFFCC', textColor: '#000000' },
  Flying: { color: '#A890F0', bgColor: '#E8E8FF', textColor: '#000000' },
  Psychic: { color: '#F85888', bgColor: '#FFCCFF', textColor: '#FFFFFF' },
  Bug: { color: '#A8B820', bgColor: '#FFFF99', textColor: '#000000' },
  Rock: { color: '#B8A038', bgColor: '#FFCCCC', textColor: '#000000' },
  Ghost: { color: '#705898', bgColor: '#FFCCFF', textColor: '#FFFFFF' },
  Dragon: { color: '#7038F8', bgColor: '#E8CCFF', textColor: '#FFFFFF' },
  Dark: { color: '#705848', bgColor: '#D8D8D8', textColor: '#FFFFFF' },
  Steel: { color: '#B8B8D0', bgColor: '#E8E8F8', textColor: '#000000' },
  Fairy: { color: '#EE99AC', bgColor: '#FFCCFF', textColor: '#000000' },
};

export const getTypeStyle = (type: PokemonType): TypeStyle => typeColors[type];

export const getTypeData = (type: PokemonType): TypeData => {
  const data = typeChartData[type];
  if (!data) throw new Error(`Unknown type: ${type}`);
  return data;
};

interface TypeData {
  weak_to: PokemonType[];
  resists: PokemonType[];
  immune_to: PokemonType[];
}

const typeChartData: Record<PokemonType, TypeData> = {
  Normal: { weak_to: ['Fighting'], resists: [], immune_to: ['Ghost'] },
  Fire: { weak_to: ['Water', 'Ground', 'Rock'], resists: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'], immune_to: [] },
  Water: { weak_to: ['Electric', 'Grass'], resists: ['Fire', 'Water', 'Ice', 'Steel'], immune_to: [] },
  Electric: { weak_to: ['Ground'], resists: ['Electric', 'Flying', 'Steel'], immune_to: [] },
  Grass: { weak_to: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'], resists: ['Water', 'Electric', 'Grass', 'Ground'], immune_to: [] },
  Ice: { weak_to: ['Fire', 'Fighting', 'Rock', 'Steel'], resists: ['Ice'], immune_to: [] },
  Fighting: { weak_to: ['Flying', 'Psychic', 'Fairy'], resists: ['Bug', 'Rock', 'Dark'], immune_to: [] },
  Poison: { weak_to: ['Ground', 'Psychic'], resists: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'], immune_to: [] },
  Ground: { weak_to: ['Water', 'Grass', 'Ice'], resists: ['Poison', 'Rock'], immune_to: ['Electric'] },
  Flying: { weak_to: ['Electric', 'Ice', 'Rock'], resists: ['Grass', 'Fighting', 'Bug'], immune_to: ['Ground'] },
  Psychic: { weak_to: ['Bug', 'Ghost', 'Dark'], resists: ['Fighting', 'Psychic'], immune_to: [] },
  Bug: { weak_to: ['Fire', 'Flying', 'Rock'], resists: ['Grass', 'Fighting', 'Ground'], immune_to: [] },
  Rock: { weak_to: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'], resists: ['Normal', 'Fire', 'Poison', 'Flying'], immune_to: [] },
  Ghost: { weak_to: ['Ghost', 'Dark'], resists: ['Poison', 'Bug'], immune_to: ['Normal', 'Fighting'] },
  Dragon: { weak_to: ['Ice', 'Dragon', 'Fairy'], resists: ['Fire', 'Water', 'Electric', 'Grass'], immune_to: [] },
  Dark: { weak_to: ['Fighting', 'Bug', 'Fairy'], resists: ['Ghost', 'Dark'], immune_to: ['Psychic'] },
  Steel: { weak_to: ['Fire', 'Fighting', 'Ground'], resists: ['Normal', 'Grass', 'Ice', 'Flying', 'Psychic', 'Bug', 'Rock', 'Dragon', 'Steel', 'Fairy'], immune_to: ['Poison'] },
  Fairy: { weak_to: ['Poison', 'Steel'], resists: ['Fighting', 'Bug', 'Dark'], immune_to: ['Dragon'] },
};

export const getWeaknesses = (types: [PokemonType] | [PokemonType, PokemonType]): PokemonType[] => {
  const result = new Set<PokemonType>();
  for (const t of types) {
    typeChartData[t].weak_to.forEach(x => result.add(x));
  }
  return Array.from(result);
};

export const getResistances = (types: [PokemonType] | [PokemonType, PokemonType]): PokemonType[] => {
  const result = new Set<PokemonType>();
  for (const t of types) {
    typeChartData[t].resists.forEach(x => result.add(x));
  }
  return Array.from(result);
};

export const getImmunities = (types: [PokemonType] | [PokemonType, PokemonType]): PokemonType[] => {
  const result = new Set<PokemonType>();
  for (const t of types) {
    typeChartData[t].immune_to.forEach(x => result.add(x));
  }
  return Array.from(result);
};

export type QuestionCategory = 'weaknesses' | 'resistances' | 'immunities';

export interface Question {
  id: string;
  defendingTypes: [PokemonType] | [PokemonType, PokemonType];
  category: QuestionCategory;
  correctAnswers: PokemonType[];
}

const generateQuestionInternal = (): Question => {
  const types = getAllTypes();
  const isSingleType = Math.random() < 0.6;
  let defendingTypes: [PokemonType] | [PokemonType, PokemonType];
  
  if (isSingleType) {
    const type = types[Math.floor(Math.random() * types.length)];
    defendingTypes = [type];
  } else {
    const type1 = types[Math.floor(Math.random() * types.length)];
    let type2 = types[Math.floor(Math.random() * types.length)];
    while (type2 === type1) type2 = types[Math.floor(Math.random() * types.length)];
    defendingTypes = [type1, type2];
  }

  const categories: QuestionCategory[] = ['weaknesses', 'resistances', 'immunities'];
  const category = categories[Math.floor(Math.random() * categories.length)];

  let correctAnswers: PokemonType[];
  if (category === 'weaknesses') correctAnswers = getWeaknesses(defendingTypes);
  else if (category === 'resistances') correctAnswers = getResistances(defendingTypes);
  else correctAnswers = getImmunities(defendingTypes);

  if (correctAnswers.length > 6) correctAnswers = correctAnswers.slice(0, 6);

  return { id: `q_${Date.now()}_${Math.random()}`, defendingTypes, category, correctAnswers };
};

export const generateQuestion = (): Question => {
  for (let i = 0; i < 50; i++) {
    const q = generateQuestionInternal();
    if (q.correctAnswers.length > 0 && q.correctAnswers.length <= 6) return q;
  }
  return generateQuestionInternal();
};

export const generateOptions = (correctAnswers: PokemonType[], count: number = 8): PokemonType[] => {
  const all = getAllTypes();
  if (correctAnswers.length >= count) return correctAnswers.slice(0, count);
  
  const distractors = all.filter(t => !correctAnswers.includes(t)).sort(() => Math.random() - 0.5).slice(0, count - correctAnswers.length);
  return [...correctAnswers, ...distractors].sort(() => Math.random() - 0.5);
};

export const checkAnswer = (question: Question, selected: PokemonType[]): boolean => {
  if (selected.length !== question.correctAnswers.length) return false;
  const selectedSet = new Set(selected);
  const correctSet = new Set(question.correctAnswers);
  return selectedSet.size === correctSet.size && Array.from(selectedSet).every(t => correctSet.has(t));
};

export const getScore = (total: number, correct: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};