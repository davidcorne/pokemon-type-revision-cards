import type { PokemonType } from '../core/typeChart';

export interface TypeStyle {
  color: string;
  bgColor: string;
  textColor: string;
}

const typeColors: Record<PokemonType, TypeStyle> = {
  Normal: {
    color: '#A8A878',
    bgColor: '#E8E8D8',
    textColor: '#000000',
  },
  Fire: {
    color: '#F08030',
    bgColor: '#FFCCCC',
    textColor: '#000000',
  },
  Water: {
    color: '#6890F0',
    bgColor: '#CCE6FF',
    textColor: '#000000',
  },
  Electric: {
    color: '#F8D030',
    bgColor: '#FFFFCC',
    textColor: '#000000',
  },
  Grass: {
    color: '#78C850',
    bgColor: '#CCFFCC',
    textColor: '#000000',
  },
  Ice: {
    color: '#98D8D8',
    bgColor: '#E8F8F8',
    textColor: '#000000',
  },
  Fighting: {
    color: '#C03028',
    bgColor: '#FFE8CC',
    textColor: '#FFFFFF',
  },
  Poison: {
    color: '#A040A0',
    bgColor: '#E8CCFF',
    textColor: '#FFFFFF',
  },
  Ground: {
    color: '#E0C068',
    bgColor: '#FFFFCC',
    textColor: '#000000',
  },
  Flying: {
    color: '#A890F0',
    bgColor: '#E8E8FF',
    textColor: '#000000',
  },
  Psychic: {
    color: '#F85888',
    bgColor: '#FFCCFF',
    textColor: '#FFFFFF',
  },
  Bug: {
    color: '#A8B820',
    bgColor: '#FFFF99',
    textColor: '#000000',
  },
  Rock: {
    color: '#B8A038',
    bgColor: '#FFCCCC',
    textColor: '#000000',
  },
  Ghost: {
    color: '#705898',
    bgColor: '#FFCCFF',
    textColor: '#FFFFFF',
  },
  Dragon: {
    color: '#7038F8',
    bgColor: '#E8CCFF',
    textColor: '#FFFFFF',
  },
  Dark: {
    color: '#705848',
    bgColor: '#D8D8D8',
    textColor: '#FFFFFF',
  },
  Steel: {
    color: '#B8B8D0',
    bgColor: '#E8E8F8',
    textColor: '#000000',
  },
  Fairy: {
    color: '#EE99AC',
    bgColor: '#FFCCFF',
    textColor: '#000000',
  },
};

/**
 * Get the color styling for a Pokemon type
 */
export const getTypeStyle = (type: PokemonType): TypeStyle => {
  const style = typeColors[type];
  if (!style) {
    throw new Error(`Unknown type: ${type}`);
  }
  return style;
};

/**
 * Get just the primary color for a type
 */
export const getTypeColor = (type: PokemonType): string => {
  return getTypeStyle(type).color;
};

/**
 * Get the background color for a type
 */
export const getTypeBgColor = (type: PokemonType): string => {
  return getTypeStyle(type).bgColor;
};

/**
 * Get the text color for a type
 */
export const getTypeTextColor = (type: PokemonType): string => {
  return getTypeStyle(type).textColor;
};

/**
 * Get a simple SVG icon for a type
 */
export const getTypeIcon = (type: PokemonType): string => {
  const icons: Record<PokemonType, string> = {
    Normal: '●',
    Fire: '🔥',
    Water: '💧',
    Electric: '⚡',
    Grass: '🌿',
    Ice: '❄️',
    Fighting: '👊',
    Poison: '☠️',
    Ground: '⛰️',
    Flying: '🪶',
    Psychic: '🧠',
    Bug: '🦗',
    Rock: '🪨',
    Ghost: '👻',
    Dragon: '🐉',
    Dark: '🌙',
    Steel: '⚙️',
    Fairy: '✨',
  };

  return icons[type] || '●';
};
