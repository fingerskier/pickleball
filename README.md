# pickleba

A pickleball tracking app.

## Development

The frontend lives in the `app` directory and was bootstrapped with [Vite](https://vitejs.dev/) using the React + TypeScript + SWC template. State management uses [Ygdrassil](https://www.npmjs.com/package/ygdrassil).

To install dependencies and start the dev server:

```bash
cd app
npm install
npm run dev
```

A simple localStorage-based CRUD wrapper provides persistence for players, teams and games.
