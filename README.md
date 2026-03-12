# Pokémon Type Revision Cards

A web-based interactive quiz application for learning and testing knowledge of Pokémon type matchups (weaknesses, resistances, and immunities). Built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ **Interactive Quiz** – Answer 10 questions per round with randomized Pokémon type matchups
- 🎯 **Multiple Question Types** – Test knowledge of weaknesses, resistances, and immunities
- 🎨 **Visual Feedback** – Official Pokémon type colours and SVG icons for quick visual recognition
- ⚡ **Streak Tracking** – Monitor consecutive correct answers during a quiz session
- 📊 **Score Calculation** – Instant accuracy percentage based on your performance
- 🧪 **Comprehensive Tests** – 50+ unit tests ensuring core logic reliability
- 📱 **Responsive Design** – Works seamlessly on mobile, tablet, and desktop

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest
- **Type Safety**: Full TypeScript coverage

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`

## Architecture Overview

The codebase is organized into three distinct layers:

### 🎯 Core Layer (`src/core/`)

Pure business logic with zero UI dependencies. Fully unit-tested.

- **typeChart.ts** – Pokémon type definitions and relationships (weak_to, resists, immune_to)
- **effectiveness.ts** – Type matchup calculator; computes damage multipliers for single and dual-type Pokémon
- **quiz.ts** – Question generation, answer validation, and score calculation

### 🎨 UI Layer (`src/components/`)

React components that consume core logic.

- **QuizFlow.tsx** – State machine managing quiz lifecycle (start → quiz → end)
- **RevisionCard.tsx** – Main quiz card displaying questions and type buttons
- **TypeButton.tsx** – Individual type selector button with official colours
- **ScoreDisplay.tsx** – Live progress bar, accuracy percentage, and streak counter
- **SquareButton.tsx** – Reusable button component for type selection and actions

### 📦 Data Layer (`src/data/`)

Design tokens and metadata.

- **typeMetadata.ts** – Type colour palettes, text colours, and helper functions for styling

## Project Structure

```
src/
├── components/
│   ├── QuizFlow.tsx          # Main quiz state machine
│   ├── RevisionCard.tsx      # Question display and type selector
│   ├── TypeButton.tsx        # Type button with colours
│   ├── ScoreDisplay.tsx      # Score and streak display
│   └── SquareButton.tsx      # Reusable button component
├── core/
│   ├── quiz.ts               # Question generation and scoring logic
│   ├── typeChart.ts          # Type definitions and data
│   ├── effectiveness.ts      # Type matchup calculations
│   └── __tests__/
│       ├── quiz.test.ts      # 23 tests for quiz logic
│       ├── effectiveness.test.ts  # 20 tests for type matchups
│       └── typeChart.test.ts # 7 tests for type data integrity
├── data/
│   └── typeMetadata.ts       # Type colours and styling
├── App.tsx                   # App root
├── main.tsx                  # Entry point
└── index.css                 # Global Tailwind styles

public/
└── types/                    # Type SVG icons

Configuration files:
├── vite.config.ts            # Vite configuration
├── vitest.config.ts          # Test runner configuration
├── tailwind.config.js        # Tailwind CSS setup
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Development Workflow

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (interactive)
npm test

# Tests cover:
# - Type chart data integrity (18 types, valid relationships)
# - Effectiveness calculations (single and dual types)
# - Quiz logic (question generation, answer validation)
# - Default parameters (8 options per question)
```

### Building

```bash
# Production build
npm run build

# Output: dist/ directory with optimized bundles
```

### Linting

```bash
# Check code with ESLint
npm run lint
```

## Key Design Decisions

- **Pure Core Logic** – All type matchup calculations are separated from React, making them testable and reusable
- **Type Safety** – Discriminated union types for questions ensure compile-time correctness
- **Hydration-Free** – No service workers or PWA features; straightforward SPA for simplicity
- **Tailwind + Inline Styles** – Utility-first CSS with dynamic colour injection for type buttons
- **Centralized Constants** – All 18 types defined once in `typeChart.ts` to prevent duplication

## Testing Philosophy

Tests focus on **high-value, non-fragile coverage**:

- ✅ Data integrity (type references, chart consistency)
- ✅ Business logic constraints (1–6 correct answers per question)
- ✅ Functional correctness (answer validation, score calculation)
- ❌ Implementation details (shuffle order, ID format, internal retry logic)

Currently **50 tests** with 100% pass rate.

## Performance

- Vite enables fast HMR during development
- Production builds are optimized with tree-shaking and code splitting
- No external API calls; all data is bundled

## Browser Support

Modern browsers with ES2020+ support (Chrome, Firefox, Safari, Edge)

## Future Enhancements

- Multiplayer/leaderboard integration
- Dark mode theming
- Additional question types (e.g., type coverages for specific roles)
- PWA offline support
- Analytics tracking

## License

MIT
