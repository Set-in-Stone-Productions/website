# Set in Stone Productions Website Setup

This document provides instructions for setting up and running the Set in Stone Productions website locally.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (v8 or later recommended)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jb-snsweb
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

## Development

To start the development server:

```bash
pnpm dev
```

This will start the Vite development server at http://localhost:8080

## Building for Production

To build the website for production:

```bash
pnpm build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

## Project Structure

- `src/` - Source code
  - `assets/` - Images and other static assets
  - `components/` - React components
    - `ui/` - UI components from Shadcn UI
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `pages/` - Page components

## Implementation Notes

1. The website uses:
   - React with TypeScript
   - Vite as the build tool
   - Tailwind CSS for styling
   - Shadcn UI components

2. CSS imports are at the top of `src/index.css` to avoid warnings.

3. For adding new pages, create a new file in the `src/pages/` directory and update the routing in `src/App.tsx`.

## Pending Backend Implementation

The following features require backend implementation:

1. Form submissions on the Contact page
2. Project submission form with file uploads
3. Legal document storage and serving 