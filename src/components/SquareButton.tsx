import React from 'react';

interface SquareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string; // allow additional classes
}

export const SquareButton: React.FC<SquareButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        w-20 h-20 box-border px-2 py-2 border-2 rounded-xl font-semibold text-sm
        transition-all shadow-md hover:shadow-lg transform hover:scale-110
        flex flex-col items-center justify-center gap-2
        ${className}
      `}
    >
      {children}
    </button>
  );
};
