This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Template Data

Initially, this project will use mock data from `/src/data/mock-data.ts`. In order to use real candidate data:

1. Create an `.env` file in the project root and set the `NEXT_PUBLIC_USE_REAL_DATA` environment variable to `true`.
2. Create a file called `candidate-data.ts` in `src/data`. Use `mock-data.ts` as a template.

## Feature Flags

Feature flags are controlled using environment variables defined in your `.env` file.

| Environment variable         | Description           | 
| ---------------------------- | --------------------- |
| `NEXT_PUBLIC_USE_LOCATION`   |  Controls whether location information is shown in the UI. Set to `true` to show location details. |
