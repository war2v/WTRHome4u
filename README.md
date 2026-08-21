# WTR Capital Website

The official website for WTR Capital, a faith-driven property management company serving Middle Tennessee. The site includes public company information, property listings, inquiry forms, and administrative pages.

## Features

- Responsive public homepage with the WTR Capital mission, values, leadership, and contact sections
- Property listings at `/listings`
- External actions for scheduling a showing, joining the waitlist, and applying for a property
- Administrative login and home pages at `/admin/login` and `/admin/home`
- Shared navigation, footer, and UI primitives

## Tech Stack

- Next.js 16.1.6 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI Slot, Class Variance Authority, `clsx`, and `tailwind-merge`
- Lucide React and React Icons
- ESLint 9

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

From the repository root:

```bash
cd wtr-app
npm install
```

Create or update `.env` with the environment values required for your local setup.

### Development

Start the development server at [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

### Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Type Checking and Linting

Run the TypeScript checker:

```bash
npx tsc --noEmit
```

Run ESLint:

```bash
npm run lint
```

## Project Structure

```text
src/
	app/                 App Router pages and layouts
	components/          Shared UI and page sections
	lib/                 Shared utilities
public/                Static images and other public assets
```

The `@/*` TypeScript path alias maps to `src/*`.

## License

This project is proprietary to WTR Capital.
