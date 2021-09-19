## Requirements

-   node >= 12.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

Run api tests:

```bash
npm run test
```

```text
 PASS  dist/specs/Cities.test.js
  GET Cities
    ✓ /GET - Cities with existing geonameid (156 ms)
    ✓ /GET - Cities with nonexistent geonameid (81 ms)
    ✓ /GET - Cities with invalid geonameid (65 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.348 s

Ran all test suites matching /.\/dist\/specs\/Cities.test.js/i.
```

## Watch mode

We also have watch mode for Jest and TypeScript:

```bash
npm run build:watch
npm run test:watch
```

## Prettier and Eslint

Run to format the code:

```bash
npm run code:format
```

