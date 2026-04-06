# English Placement Test

A web-based English proficiency placement test built with Next.js. Users answer adaptive questions that increase in difficulty, and receive an instant proficiency level result.

## Prerequisites

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Running the App

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Running Tests

```bash
npx vitest
```

## App Flow

1. **Home Page (`/`)** — The user lands on a welcome screen and clicks "Start the Test". This calls the `/api/placement-test/start` endpoint to create a new test session.

2. **Test Page (`/test/[taskId]`)** — The user is redirected to the test page with their session ID. Questions are fetched one at a time from `/api/placement-test/question` based on the current difficulty level. The user selects an answer and submits.

3. **Adaptive Difficulty** — Every 5 questions, answers are submitted to `/api/placement-test/submit` for evaluation. If the user passes, the difficulty level increases and more questions are presented. If the user fails (or reaches the maximum level), the test ends.

4. **Results Page (`/test/[taskId]/results`)** — The user is redirected to the results page where their proficiency level, number of correct answers, and accuracy percentage are displayed. Results are fetched from `/api/placement-test/result/[taskId]`.

## Project Structure

```
src/
├── api/              # Client-side API functions (fetch wrappers)
├── app/              # Next.js App Router (pages & API routes)
│   ├── api/          # Backend API route handlers
│   └── test/         # Test and results pages
├── components/       # Reusable UI components
├── layouts/          # Page layout wrappers
├── mock/             # Mock data for questions
├── PagesContent/     # Page-level content components
├── providers/        # React context providers
└── utils/            # Utility functions
```
