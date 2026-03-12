import React, { useState, useEffect } from 'react';
import type { Question } from '../core/quiz';
import { generateOptions, checkAnswer } from '../core/quiz';
import type { PokemonType } from '../core/typeChart';
import { getTypeStyle, getTypeIcon } from '../data/typeMetadata';
import { TypeButton } from './TypeButton';

interface RevisionCardProps {
  question: Question;
  onAnswerSubmit: (isCorrect: boolean) => void;
}

export const RevisionCard: React.FC<RevisionCardProps> = ({
  question,
  onAnswerSubmit,
}) => {
  const [options, setOptions] = useState<PokemonType[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<PokemonType[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Generate options when question changes
    const generatedOptions = generateOptions(question.correctAnswers, 6);
    setOptions(generatedOptions);
    setSelectedTypes([]);
    setIsAnswered(false);
  }, [question]);

  const handleTypeSelect = (type: PokemonType) => {
    if (isAnswered) return;

    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const handleSubmit = () => {
    const correct = checkAnswer(question, selectedTypes);
    setIsCorrect(correct);
    setIsAnswered(true);
    onAnswerSubmit(correct);
  };

  const getCategoryText = (): string => {
    switch (question.category) {
      case 'weaknesses':
        return 'Select types that are **super effective** against:';
      case 'resistances':
        return 'Select types that are **not very effective** against:';
      case 'immunities':
        return 'Select types that deal **0 damage** to:';
      default:
        return 'Select the correct types:';
    }
  };

  const defendingTypeDisplay =
    question.defendingTypes.length === 1
      ? question.defendingTypes[0]
      : `${question.defendingTypes[0]}/${question.defendingTypes[1]}`;

  const defendingStyle = getTypeStyle(question.defendingTypes[0]);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Question Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          {getCategoryText().replace(/\*\*/g, '')}
        </h2>

        {/* Defending Type Display */}
        <div
          className="inline-flex items-center gap-3 px-6 py-4 rounded-lg mb-4"
          style={{ backgroundColor: defendingStyle.bgColor }}
        >
          <span className="text-4xl">{getTypeIcon(question.defendingTypes[0])}</span>
          <div>
            <div
              className="text-2xl font-bold"
              style={{ color: defendingStyle.textColor }}
            >
              {defendingTypeDisplay}
            </div>
            <div className="text-sm text-gray-600">
              Type{question.defendingTypes.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-600 mb-3">
          {selectedTypes.length > 0
            ? `Selected: ${selectedTypes.length} / ${question.correctAnswers.length}`
            : `Select ${question.correctAnswers.length} type${
                question.correctAnswers.length !== 1 ? 's' : ''
              }`}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {options.map((type) => (
            <TypeButton
              key={type}
              type={type}
              isSelected={selectedTypes.includes(type)}
              onClick={() => handleTypeSelect(type)}
              disabled={isAnswered}
            />
          ))}
        </div>
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isCorrect
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <p className="font-semibold mb-2">
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-sm">
            {isCorrect
              ? `Great job! You correctly identified all the ${question.category} against ${defendingTypeDisplay}.`
              : `The correct answer is: ${question.correctAnswers.join(', ')}`}
          </p>
        </div>
      )}

      {/* Submit Button */}
      {!isAnswered && (
        <button
          onClick={handleSubmit}
          disabled={selectedTypes.length !== question.correctAnswers.length}
          className={`w-full py-3 rounded-lg font-semibold transition-all
            ${
              selectedTypes.length === question.correctAnswers.length
                ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};
