<script lang="ts">
  import type { PokemonType } from '$lib/core/types';
  import { getTypeStyle, getTypeIcon } from '$lib/core/types';

  export let type: PokemonType;
  export let isSelected: boolean = false;
  export let onClick: () => void = () => {};

  const style = getTypeStyle(type);
  const icon = getTypeIcon(type);
</script>

<button
  class="type-btn"
  class:selected={isSelected}
  onclick={onClick}
  style="--type-color: {style.color}; --type-bg: {style.bgColor}; --type-text: {style.textColor}"
>
  {@html icon}
  <span class="type-label">{type}</span>
</button>

<style>
  .type-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: 5rem;
    height: 5rem;
    border: 2px solid var(--type-color);
    border-radius: var(--radius);
    background: var(--type-bg);
    color: var(--type-text);
    cursor: pointer;
    transition: all 0.2s var(--ease-out);
    box-shadow: var(--shadow-sm);
  }

  .type-btn :global(svg) {
    width: 2.5rem;
    height: 2.5rem;
  }

  .type-btn:hover {
    transform: scale(1.08);
    box-shadow: var(--shadow);
  }

  .type-btn.selected {
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
    border-color: var(--text-h);
  }

  .type-label {
    font-size: 0.7rem;
    font-weight: 600;
    white-space: nowrap;
  }
</style>