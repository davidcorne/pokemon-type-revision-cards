import React from 'react';

interface ScoreDisplayProps {
  correct: number;
  total: number;
  streak?: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  correct,
  total,
  streak = 0,
}) => {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow">
      {/* Score */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-600">{correct}</span>
        <span className="text-gray-600">of</span>
        <span className="text-2xl font-bold text-gray-800">{total}</span>
        <span className="text-gray-600">correct</span>
      </div>

      {/* Percentage */}
      <div className="text-center">
        <div
          className={`text-3xl font-bold rounded-full w-20 h-20 flex items-center justify-center ${
            percentage >= 75
              ? 'bg-green-100 text-green-700'
              : percentage >= 50
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
          }`}
        >
          {percentage}%
        </div>
      </div>

      {/* Streak */}
      {streak > 0 && (
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">Streak</div>
          <div className="text-3xl font-bold text-orange-600">🔥 {streak}</div>
        </div>
      )}
    </div>
  );
};
