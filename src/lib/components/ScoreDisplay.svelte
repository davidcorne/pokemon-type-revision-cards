<script lang="ts">
  export let correctVal: number = 0;
  export let totalVal: number = 0;
  export let streak: number = 0;

  $: percentage = totalVal > 0 ? Math.round((correctVal / totalVal) * 100) : 0;
  
  $: accuracyColor = percentage >= 75 ? 'var(--success)' : percentage >= 50 ? 'var(--warning)' : 'var(--danger)';
</script>

<div class="score-display">
  <div class="score-section">
    <span class="label">Progress</span>
    <div class="score-value">
      <span class="correct">{correctVal}</span>
      <span class="sep">/</span>
      <span class="total">{totalVal}</span>
    </div>
  </div>

  <div class="score-section center">
    <span class="label">Accuracy</span>
    <div class="accuracy-circle" style="background: {accuracyColor}">
      {percentage}%
    </div>
  </div>

  {#if streak > 0}
    <div class="score-section">
      <span class="label">Streak</span>
      <div class="streak-badge">
        <span class="fire">🔥</span>
        <span class="streak-num">{streak}</span>
      </div>
    </div>
  {/if}
</div>

<style>
  .score-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1.25rem 1.5rem;
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
  }

  .score-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .score-section.center {
    align-items: center;
  }

  .label {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text);
    opacity: 0.7;
  }

  .score-value {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
  }

  .correct {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
  }

  .sep {
    font-size: 1.25rem;
    opacity: 0.4;
  }

  .total {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-h);
  }

  .accuracy-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: var(--radius);
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    box-shadow: var(--shadow);
  }

  .streak-badge {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    border-radius: var(--radius);
    color: white;
  }

  .streak-num {
    font-size: 1.5rem;
    font-weight: 700;
  }
</style>