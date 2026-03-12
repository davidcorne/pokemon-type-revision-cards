import type { PokemonType } from '../core/typeChart';
import { getTypeStyle, getTypeIcon } from '../data/typeMetadata';

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
  const icon = getTypeIcon(type);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-lg font-semibold text-sm
        transition-all duration-200
        flex items-center justify-center gap-2
        border-2
        ${
          isSelected
            ? 'border-gray-800 scale-105 shadow-lg'
            : 'border-transparent hover:scale-105'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{
        backgroundColor: style.bgColor,
        color: style.textColor,
        borderColor: isSelected ? style.color : 'transparent',
      }}
    >
      <span className="text-lg">{icon}</span>
      {type}
    </button>
  );
};
