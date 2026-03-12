import React, { useState, useEffect } from 'react';
import type { Question } from '../core/quiz';
import { generateOptions, checkAnswer } from '../core/quiz';
import type { PokemonType } from '../core/typeChart';
import { getTypeStyle } from '../data/typeMetadata';
import { TypeButton } from './TypeButton';
import { SquareButton } from './SquareButton';

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

  const handleSkip = () => {
    setIsAnswered(true);
    onAnswerSubmit(false);
  };

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
          className="inline-flex items-center gap-4 px-6 py-4 rounded-lg mb-4"
          style={{ backgroundColor: defendingStyle.bgColor }}
        >
          <img
            src={`/types/${question.defendingTypes[0].toLowerCase()}.svg`}
            alt={question.defendingTypes[0]}
            className="w-16 h-16 object-contain"
          />
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
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-600 mb-4">
          {selectedTypes.length > 0
            ? `Selected: ${selectedTypes.length} / ${question.correctAnswers.length}`
            : `Select ${question.correctAnswers.length} type${question.correctAnswers.length !== 1 ? 's' : ''}`}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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

      {/* Buttons Section */}
      {!isAnswered && (
        <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200 justify-center">
          <SquareButton
            onClick={handleSubmit}
            disabled={selectedTypes.length !== question.correctAnswers.length}
            className={`${
              selectedTypes.length === question.correctAnswers.length
                ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer'
                : 'bg-gray-300 text-gray-400 cursor-not-allowed opacity-60'
            }
          `}
            title="Submit answer"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-bold whitespace-nowrap">Submit</span>
          </SquareButton>
          <SquareButton
            onClick={handleSkip}
            className="bg-gray-400 hover:bg-gray-500 text-white"
            title="Skip question"
          >
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M5 4v16M19 12l-8-6v12l8-6Z"/>
            </svg>
            <span className="text-sm font-bold whitespace-nowrap">Skip</span>
          </SquareButton>
        </div>
      )}
    </div>
  );
};
