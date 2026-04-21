<script lang="ts">
  import type { Question, PokemonType } from '$lib/core/types';
  import { generateOptions, checkAnswer, getTypeStyle, getTypeIcon } from '$lib/core/types';
  import TypeButton from './TypeButton.svelte';

  export let question: Question;
  export let onAnswerSubmit: (isCorrect: boolean) => void = () => {};

  let options: PokemonType[] = [];
  let selectedTypes: PokemonType[] = [];
  let isAnswered = false;
  let isCorrect = false;

  $: {
    options = generateOptions(question.correctAnswers, 8);
    selectedTypes = [];
    isAnswered = false;
    isCorrect = false;
  }

  const handleTypeSelect = (type: PokemonType) => {
    if (isAnswered) return;
    selectedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
  };

  const handleSubmit = () => {
    isCorrect = checkAnswer(question, selectedTypes);
    isAnswered = true;
    onAnswerSubmit(isCorrect);
  };

  const handleSkip = () => {
    isAnswered = true;
    onAnswerSubmit(false);
  };

  $: defendingTypeDisplay = question.defendingTypes.length === 1
    ? question.defendingTypes[0]
    : `${question.defendingTypes[0]}/${question.defendingTypes[1]}`;
    
  $: defendingStyle = getTypeStyle(question.defendingTypes[0]);
  $: defendingIcon = getTypeIcon(question.defendingTypes[0]);
  
  $: categoryText = (() => {
    switch (question.category) {
      case 'weaknesses': return `Select types that are super effective against ${defendingTypeDisplay}:`;
      case 'resistances': return `Select types that are not very effective against ${defendingTypeDisplay}:`;
      case 'immunities': return `Select types that deal 0 damage to ${defendingTypeDisplay}:`;
    }
  })();
</script>

<div class="revision-card animate-scale-in">
  <div class="question-header">
    <h2 class="question-prompt">{categoryText}</h2>
    
    <div class="defending-type" style="--def-bg: {defendingStyle.bgColor}">
      <div class="defending-icon">
        {@html defendingIcon}
      </div>
      <div class="defending-info">
        <span class="defending-name" style="color: {defendingStyle.textColor}">{defendingTypeDisplay}</span>
        <span class="defending-label">Type{question.defendingTypes.length > 1 ? 's' : ''}</span>
      </div>
    </div>
  </div>

  <div class="options-section">
    <p class="selection-hint">
      {#if selectedTypes.length > 0}
        Selected: {selectedTypes.length} / {question.correctAnswers.length}
      {:else}
        Select {question.correctAnswers.length} type{question.correctAnswers.length !== 1 ? 's' : ''}
      {/if}
    </p>
    
    <div class="options-grid">
      {#each options as type (type)}
        <TypeButton 
          {type}
          isSelected={selectedTypes.includes(type)}
          onClick={() => handleTypeSelect(type)}
        />
      {/each}
    </div>
  </div>

  {#if isAnswered}
    <div class="feedback" class:correct={isCorrect} class:incorrect={!isCorrect}>
      <p class="feedback-title">{isCorrect ? '✓ Correct!' : '✗ Incorrect'}</p>
      <p class="feedback-text">
        {isCorrect 
          ? `Great job! You correctly identified all the ${question.category} against ${defendingTypeDisplay}.`
          : `The correct answer is: ${question.correctAnswers.join(', ')}`}
      </p>
    </div>
  {:else}
    <div class="actions">
      <button 
        class="action-btn submit"
        class:enabled={selectedTypes.length === question.correctAnswers.length}
        disabled={selectedTypes.length !== question.correctAnswers.length}
        on:click={handleSubmit}
      >
        <svg viewBox="0 0 24 24" fill="none" class="btn-icon">
          <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Submit
      </button>
      <button class="action-btn skip" on:click={handleSkip}>
        <svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon">
          <path d="M5 4v16M19 12l-8-6v12l8-6Z"/>
        </svg>
        Skip
      </button>
    </div>
  {/if}
</div>

<style>
  .revision-card {
    width: 100%;
    max-width: 42rem;
    margin: 0 auto;
    padding: 2rem;
    background: var(--card-bg);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border);
  }

  .question-header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .question-prompt {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-h);
  }

  .defending-type {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: var(--def-bg);
    border-radius: var(--radius-lg);
  }

  .defending-icon {
    width: 4rem;
    height: 4rem;
  }

  .defending-icon :global(svg) {
    width: 100%;
    height: 100%;
  }

  .defending-info {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .defending-name {
    font-size: 1.75rem;
    font-weight: 700;
  }

  .defending-label {
    font-size: 0.8rem;
    color: var(--text);
    opacity: 0.7;
  }

  .options-section {
    margin-bottom: 1.5rem;
  }

  .selection-hint {
    text-align: center;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .options-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
    justify-items: center;
  }

  @media (max-width: 480px) {
    .options-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .feedback {
    padding: 1rem;
    border-radius: var(--radius);
    text-align: center;
    animation: fadeIn 0.3s var(--ease-out);
  }

  .feedback.correct {
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid var(--success);
  }

  .feedback.incorrect {
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid var(--danger);
  }

  .feedback-title {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  .feedback.correct .feedback-title {
    color: var(--success);
  }

  .feedback.incorrect .feedback-title {
    color: var(--danger);
  }

  .feedback-text {
    font-size: 0.9rem;
    color: var(--text);
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--radius);
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.2s var(--ease-out);
  }

  .action-btn.submit {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .action-btn.submit.enabled {
    box-shadow: var(--shadow);
  }

  .action-btn.submit:disabled {
    background: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
  }

  .action-btn.skip {
    background: #6b7280;
    color: white;
  }

  .action-btn.skip:hover {
    background: #4b5563;
  }

  .btn-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>