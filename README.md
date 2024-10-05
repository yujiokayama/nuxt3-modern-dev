## 開発環境ととのえろー

### Linter & formatter

- Biome: https://biomejs.dev/ja/
  - Lint と formatter（style-lint の役割も果たせるのかも検証したい）
- style-lint
  - プロパティの順番を統一したい

### Test

- Playwright
  - E2E テスト、リグレッションテスト

### Mock

- MSW
  - API のモッキング 1.初期化
  ```
  npx msw init ./public --save
  ```
  2.プラグインを作成

### Other

- 環境変数の扱い
  https://tyotto-good.com/nuxtjs/environment-variable

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
