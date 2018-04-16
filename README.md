# tsplay

## Build

1. Install `node` 8.x using [nvm](https://github.com/creationix/nvm) or [binary packages](https://nodejs.org/en/download/). Using nvm is more recommended as you can switch between node version easily.
2. In root folder, run `npm install`.
3. Run `npx webpack`.

## Test

Open `index.html` in web browser.

### Build Explanation

1. The simple way to compile TypeScript into JavaScript is using `tsc` command line.
2. `tsconfig.json` is used to "control" the `tsc` command.
3. We don't invoke `tsc` directly. Instead, we integrate it with `webpack`.
4. The key integration is the `awesome-typescript-loader` library.
5. `awesome-typescript-loader` is configured in `webpack.config.js`: `{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },`.
6. `awesome-typescript-loader` will read `tsconfig.json` file.

### REPL (Read-Eval-Print-Loop) example using [ts-node](https://github.com/TypeStrong/ts-node)
1. `npx ts-node src/components/test.ts`.
2. `npx ts-node` (starts TypeScript REPL).
