This resume template project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies via `npm install` and run the development server using `npm run dev` or `npm run dev:typecheck`.

Use `npm run dev:typecheck` in order to run the Next.js dev server and TypeScript type-checker (`tsc`) concurrently. As of `9.4.x`, [Next.js will only check types at `next build`](https://github.com/vercel/next.js/discussions/33634), so this command is a workaround to catch type errors more easily during development. You can also run `npm run typecheck` to perform a one-time type check.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project has [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh) enabled by default.

## Template Data

Initially, this project will use mock data from `/src/data/mock-data.ts`. In order to use real candidate data:

1. Create an `.env` file in the project root and set the `NEXT_PUBLIC_USE_REAL_DATA` environment variable to `true`.
2. Create a file called `candidate-data.ts` in `src/data`. Use `mock-data.ts` as a template.

## Feature Flags

Feature flags are controlled using environment variables defined in your `.env` file.

| Environment variable         | Description           | 
| ---------------------------- | --------------------- |
| `NEXT_PUBLIC_USE_LOCATION`   |  Controls whether location information is shown in the UI. Set to `true` to show location details. |
