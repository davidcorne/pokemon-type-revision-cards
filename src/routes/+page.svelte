<script lang="ts">
  import type { Question, PokemonType } from '$lib/core/types';
  import { generateQuestion, getScore } from '$lib/core/types';
  import RevisionCard from '$lib/components/RevisionCard.svelte';
  import ScoreDisplay from '$lib/components/ScoreDisplay.svelte';

  type QuizState = 'start' | 'quiz' | 'end';

  let state: QuizState = 'start';
  let question: Question | null = null;
  let correctCount = 0;
  let totalCount = 0;
  let streak = 0;

  const startNewQuiz = () => {
    correctCount = 0;
    totalCount = 0;
    streak = 0;
    question = generateQuestion();
    state = 'quiz';
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    totalCount++;
    if (isCorrect) {
      correctCount++;
      streak++;
    } else {
      streak = 0;
    }

    setTimeout(() => {
      if (totalCount < 10) {
        question = generateQuestion();
      } else {
        state = 'end';
      }
    }, 2500);
  };

  $: score = getScore(totalCount, correctCount);
  $: scoreMessage = score >= 90 ? 'Outstanding! You know your types!' 
    : score >= 70 ? 'Great job! Keep practicing!' 
    : score >= 50 ? 'Good start! Study more matchups!' 
    : 'Keep learning! Try again soon!';
</script>

<div class="app">
  <div class="background-pattern"></div>
  
  <header class="header">
    <h1 class="title">Pokemon Type Revision</h1>
    <p class="subtitle">Test your knowledge of Pokemon type effectiveness</p>
  </header>

  <main class="content">
    {#if state === 'start'}
      <div class="start-screen animate-scale-in">
        <div class="start-card">
          <div class="pokeball-icon">
            <svg viewBox="0 0 100 100" class="pokeball">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="4"/>
              <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" stroke-width="4"/>
              <circle cx="50" cy="50" r="12" fill="currentColor"/>
              <circle cx="50" cy="50" r="6" fill="white"/>
            </svg>
          </div>
          <h2>Ready to test your skills?</h2>
          <p>Answer 10 questions about Pokemon type matchups. Choose all the types that match each question category.</p>
          <button class="start-btn" on:click={startNewQuiz}>
            <span>Start Quiz</span>
            <svg viewBox="0 0 24 24" fill="none" class="arrow">
              <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

    {:else if state === 'quiz' && question}
      <div class="quiz-screen">
        <div class="progress-bar">
          <div class="progress-fill" style="width: {(totalCount / 10) * 100}%"></div>
        </div>
        
        <div class="question-counter">Question {totalCount + 1} of 10</div>
        
        <ScoreDisplay correctVal={correctCount} totalVal={totalCount} {streak} />
        
        <RevisionCard 
          {question} 
          onAnswerSubmit={handleAnswerSubmit} 
        />
      </div>

    {:else if state === 'end'}
      <div class="end-screen animate-scale-in">
        <div class="end-card">
          <h2>Quiz Complete!</h2>
          <p class="score-label">Here's your final score:</p>
          
          <div class="final-score" class:gold={score >= 75} class:silver={score >= 50} class:bronze={score < 50}>
            <span class="score-num">{score}%</span>
          </div>
          
          <p class="score-detail">{correctCount} out of {totalCount} correct</p>
          <p class="score-message">{scoreMessage}</p>
          
          <button class="start-btn" on:click={startNewQuiz}>
            <span>Try Again</span>
            <svg viewBox="0 0 24 24" fill="none" class="arrow">
              <path d="M1 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    {/if}
  </main>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    position: relative;
    overflow: hidden;
  }

  .background-pattern {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text);
    opacity: 0.7;
  }

  .content {
    width: 100%;
    max-width: 48rem;
    position: relative;
    z-index: 1;
  }

  .start-screen, .end-screen {
    display: flex;
    justify-content: center;
  }

  .start-card, .end-card {
    background: var(--card-bg);
    padding: 3rem 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    border: 1px solid var(--border);
    text-align: center;
    max-width: 28rem;
    width: 100%;
  }

  .pokeball-icon {
    width: 5rem;
    height: 5rem;
    margin: 0 auto 1.5rem;
    color: var(--accent);
    animation: bounce 2s ease-in-out infinite;
  }

  .pokeball {
    width: 100%;
    height: 100%;
  }

  .start-card h2, .end-card h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .start-card p, .end-card p {
    color: var(--text);
    margin-bottom: 2rem;
    opacity: 0.8;
  }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--accent), #8b5cf6);
    color: white;
    border: none;
    border-radius: var(--radius);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s var(--ease-out);
    box-shadow: var(--shadow);
  }

  .start-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .arrow {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.2s var(--ease-out);
  }

  .start-btn:hover .arrow {
    transform: translateX(4px);
  }

  .quiz-screen {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .progress-bar {
    height: 6px;
    background: var(--border);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), #ec4899);
    border-radius: 3px;
    transition: width 0.4s var(--ease-out);
  }

  .question-counter {
    text-align: center;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text);
    opacity: 0.6;
  }

  .end-card .score-label {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .final-score {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-lg);
  }

  .final-score.gold {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
  }

  .final-score.silver {
    background: linear-gradient(135deg, #9ca3af, #6b7280);
  }

  .final-score.bronze {
    background: linear-gradient(135deg, #f97316, #ea580c);
  }

  .score-num {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
  }

  .score-detail {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-h);
    margin-bottom: 0.5rem;
  }

  .score-message {
    font-size: 1rem;
    color: var(--accent);
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    .title {
      font-size: 1.75rem;
    }

    .start-card, .end-card {
      padding: 2rem 1.5rem;
    }
  }
</style>