import React, { useState, useCallback } from 'react';
import { generateQuestion, getScore } from '../core/quiz';
import type { Question } from '../core/quiz';
import { RevisionCard } from './RevisionCard';
import { ScoreDisplay } from './ScoreDisplay';

type QuizState = 'start' | 'quiz' | 'end';

export const QuizFlow: React.FC = () => {
  const [state, setState] = useState<QuizState>('start');
  const [question, setQuestion] = useState<Question | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const startNewQuiz = useCallback(() => {
    setCorrectCount(0);
    setTotalCount(0);
    setStreak(0);
    const newQuestion = generateQuestion();
    setQuestion(newQuestion);
    setState('quiz');
  }, []);

  const handleAnswerSubmit = useCallback((isCorrect: boolean) => {
    setTotalCount((prev) => prev + 1);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    // After a delay, load next question or end quiz
    setTimeout(() => {
      if (totalCount + 1 < 10) {
        const newQuestion = generateQuestion();
        setQuestion(newQuestion);
      } else {
        setState('end');
      }
    }, 2500);
  }, [totalCount]);

  const score = getScore(totalCount, correctCount);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Pokemon Type Revision
          </h1>
          <p className="text-gray-600">
            Test your knowledge of Pokemon type effectiveness
          </p>
        </div>

        {/* Start Screen */}
        {state === 'start' && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-6">
              Answer 10 questions about Pokemon type matchups. Choose all the
              types that match each question category.
            </p>
            <button
              onClick={startNewQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* Quiz Screen */}
        {state === 'quiz' && question && (
          <>
            <div className="mb-6">
              <ScoreDisplay
                correct={correctCount}
                total={totalCount}
                streak={streak}
              />
            </div>
            <RevisionCard
              key={question.id}
              question={question}
              onAnswerSubmit={handleAnswerSubmit}
            />
            <div className="text-center mt-4 text-sm text-gray-600">
              Question {totalCount + 1} of 10
            </div>
          </>
        )}

        {/* End Screen */}
        {state === 'end' && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-gray-600 mb-8">
              Here's your final score:
            </p>

            <div className="mb-8">
              <div
                className={`inline-block rounded-full w-32 h-32 flex items-center justify-center mb-4 ${
                  score >= 75
                    ? 'bg-green-100'
                    : score >= 50
                      ? 'bg-yellow-100'
                      : 'bg-red-100'
                }`}
              >
                <div className="text-center">
                  <div
                    className={`text-5xl font-bold ${
                      score >= 75
                        ? 'text-green-700'
                        : score >= 50
                          ? 'text-yellow-700'
                          : 'text-red-700'
                    }`}
                  >
                    {score}%
                  </div>
                </div>
              </div>

              <div className="text-xl font-semibold text-gray-700 mb-4">
                {correctCount} out of {totalCount} correct
              </div>

              <div className="text-lg text-gray-600 mb-6">
                {score >= 90
                  ? '🌟 Outstanding! You know your types!'
                  : score >= 70
                    ? '👍 Great job! Keep practicing!'
                    : score >= 50
                      ? '💪 Good start! Study more matchups!'
                      : '📚 Keep learning! Try again soon!'}
              </div>
            </div>

            <button
              onClick={startNewQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
