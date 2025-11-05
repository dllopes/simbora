# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

"Simbora" (package name: chapadinhos_hospedagens) is a single-page React application for comparing accommodation options. It's built with Vite, React 18, TypeScript, and uses the shadcn/ui component library with Tailwind CSS v4.

## Development Commands

### Package Management
- **Package manager**: pnpm (v10.4.1+)
- **Install dependencies**: `pnpm install`

### Development Workflow
- **Start dev server**: `pnpm dev` (runs on port 3000 with host access)
- **Build for production**: `pnpm build`
- **Preview production build**: `pnpm preview`
- **Type checking**: `pnpm check` (runs TypeScript compiler without emitting files)
- **Format code**: `pnpm format` (uses Prettier)

### Testing
- Vitest is installed but no test configuration or test scripts are set up yet
- No test files exist in the codebase currently

## Project Architecture

### Monorepo Structure
The project uses a monorepo pattern with three main directories:
- **`client/`**: Frontend React application (primary focus)
- **`server/`**: Backend directory (currently empty)
- **`shared/`**: Shared code between client/server (currently empty)

### Client Directory Structure
```
client/
├── index.html          # Entry HTML with Vite env placeholders
├── public/             # Static assets
└── src/
    ├── main.tsx        # React app entry point
    ├── App.tsx         # Root component with routing
    ├── index.css       # Global styles and Tailwind config
    ├── components/     # React components
    │   ├── ui/         # shadcn/ui components (50+ components)
    │   ├── ErrorBoundary.tsx
    │   ├── ManusDialog.tsx
    │   └── Map.tsx
    ├── contexts/       # React contexts
    │   └── ThemeContext.tsx
    ├── hooks/          # Custom React hooks
    ├── lib/            # Utilities
    │   └── utils.ts    # cn() helper for class merging
    ├── pages/          # Page components
    │   ├── Home.tsx    # Main accommodation comparison page
    │   └── NotFound.tsx
    └── const.ts        # Constants
```

### Key Dependencies & Patterns

**Routing**: Uses `wouter` (lightweight React router) with a patched version (3.7.1)
- Routes defined in `App.tsx`
- Base path set to `"./"` for flexible deployment

**Styling**:
- Tailwind CSS v4 with custom theme in `index.css`
- shadcn/ui "new-york" style variant
- CSS variables for theming with light/dark mode support
- Custom container utility with responsive padding

**State Management**: 
- React Context for theme management (`ThemeContext.tsx`)
- `@tanstack/react-query` v4 for server state (currently unused)

**UI Components**:
- Radix UI primitives for accessibility
- shadcn/ui component library (50+ components)
- Lucide React for icons
- Sonner for toast notifications
- Framer Motion for animations

### Path Aliases
```typescript
"@/*" → "./client/src/*"
"@shared/*" → "./shared/*"
```

### TypeScript Configuration
- Strict mode enabled
- Module: ESNext with bundler resolution
- JSX preserved (handled by Vite)
- Type checking without emitting files (`noEmit: true`)

### Theme System
- Managed via `ThemeContext.tsx`
- Currently set to light theme by default (non-switchable)
- To enable theme switching: pass `switchable` prop to `ThemeProvider` and use `useTheme` hook
- Theme colors defined in `index.css` using CSS custom properties

### Deployment
- GitHub Pages deployment via `.github/workflows/static.yml`
- Triggered on pushes to `master` branch
- Build output directory: `dist/`

## Code Conventions

### Component Structure
- Functional components with TypeScript
- Use `@/` alias for imports from `client/src/`
- UI components use shadcn/ui patterns (component composition with Radix UI)

### Styling
- Use Tailwind utility classes
- Use `cn()` helper (from `@/lib/utils`) to merge class names conditionally
- Follow shadcn/ui color system with CSS variables

### Type Safety
- All components are typed
- Inline type definitions for component-specific types
- Shared types can go in `shared/` directory

## Environment Variables
The app uses Vite environment variables in `index.html`:
- `%VITE_APP_LOGO%` - App logo path
- `%VITE_APP_TITLE%` - App title
- `%VITE_ANALYTICS_ENDPOINT%` - Umami analytics endpoint
- `%VITE_ANALYTICS_WEBSITE_ID%` - Umami website ID

## Development Notes

### Vite Configuration
- Root directory: `client/`
- Build output: `dist/` (at project root)
- Dev server allows specific hosts (manus.computer domains, localhost)
- File system access is strict with dotfiles denied
- Plugins: React, Tailwind CSS v4, JSX loc plugin

### Patches
- wouter@3.7.1 has a custom patch applied via pnpm (see `patches/` directory)
- tailwindcss uses nanoid override (3.3.7)

### Current State
- Application is functional with accommodation comparison features
- Server and shared directories are empty (future backend integration)
- No tests configured yet (vitest installed but not set up)
- No linting configuration (no ESLint detected)
