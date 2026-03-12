import type { PokemonType } from '../core/typeChart';
import { getTypeStyle } from '../data/typeMetadata';
import { SquareButton } from './SquareButton';

interface TypeButtonProps {
  type: PokemonType;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const TypeButton: React.FC<TypeButtonProps> = ({
  type,
  isSelected,
  onClick,
  disabled = false,
}) => {
  const style = getTypeStyle(type);
  const svgPath = `/types/${type.toLowerCase()}.svg`;

  return (
    <SquareButton
      onClick={onClick}
      disabled={disabled}
      className={`
        duration-200
        gap-1
        ${
          isSelected
            ? 'border-gray-800 scale-105 shadow-lg'
            : 'border-gray-200 hover:border-gray-300 hover:scale-105'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{
        backgroundColor: style.bgColor,
        color: style.textColor,
        borderColor: isSelected ? style.color : '#e5e7eb',
      }}
    >
      <img 
        src={svgPath}
        alt={type}
        className="w-10 h-10 object-contain"
      />
      <span className="text-xs font-semibold leading-tight whitespace-nowrap">{type}</span>
    </SquareButton>
  );
};
