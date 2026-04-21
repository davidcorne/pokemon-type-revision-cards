# Pokémon Type Revision Cards

An interactive quiz for learning Pokémon type matchups. Built with SvelteKit, TypeScript, and modern CSS animations.

## Features

- **Interactive Quiz** – 10 questions per round testing type matchups
- **Pokemon Questions** – Uses real Pokemon names (e.g., "Tinkaton (Fairy/Steel)")
- **Three Question Types**: Weaknesses, resistances, and immunities
- **Visual Feedback** – Green/red highlighting for correct/incorrect answers
- **Streak Tracking** – Monitor consecutive correct answers
- **Score Calculation** – Accuracy percentage display
- **Responsive Design** – Works on mobile, tablet, and desktop

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS custom properties
- **Testing**: Vitest

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Project Structure

```
src/
├── lib/
│   ├── core/
│   │   ├── types.ts         # Type definitions, effectiveness logic, question generation
│   │   └── __tests__/      # Unit tests
│   ├── components/
│   │   ├── RevisionCard.svelte  # Main quiz card
│   │   ├── TypeButton.svelte     # Type selector button
│   │   └── ScoreDisplay.svelte  # Score and streak display
│   └── data/
│       └── pokemon.json   # Pokemon names and types
├── routes/
│   ├── +page.svelte      # Main quiz page
│   └── +layout.svelte    # App layout
└── app.css               # Global styles

icons/                    # Type SVG icons (embedded at build time)
```

## Questions

Questions now use real Pokemon names and their types:

- "Select types that are super effective against Tinkaton (Fairy/Steel):"
- "Select types that are not very effective against Charizard (Fire/Flying):"
- "Select types that deal 0 damage to Gengar (Ghost/Poison):"

## Development

```bash
# Run tests
npm run test

# Build
npm run build
```

## License

MIT