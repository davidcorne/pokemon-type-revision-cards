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
    <div className="flex items-center justify-between gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-100">
      {/* Score */}
      <div className="flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Progress</div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-blue-600">{correct}</span>
          <span className="text-gray-400 text-lg">/</span>
          <span className="text-2xl font-semibold text-gray-700">{total}</span>
        </div>
      </div>

      {/* Percentage */}
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Accuracy</div>
        <div
          className={`text-3xl font-bold rounded-xl w-20 h-20 flex items-center justify-center transition-all ${
            percentage >= 75
              ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg'
              : percentage >= 50
                ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg'
                : 'bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg'
          }`}
        >
          {percentage}%
        </div>
      </div>

      {/* Streak */}
      {streak > 0 && (
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Streak</div>
          <div className="flex items-center gap-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
            <span className="text-xl">🔥</span>
            <span className="text-2xl">{streak}</span>
          </div>
        </div>
      )}
    </div>
  );
};
