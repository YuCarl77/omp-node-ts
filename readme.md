## Introduction

A very simple [omp server](https://github.com/openmultiplayer/server-beta) boilerplate that uses the [samp-node plugin](https://github.com/AmyrAhmady/samp-node) and the [samp-node-lib](https://github.com/peterszombati/samp-node-lib).

## Usage

> **The necessary files were removed** to ensure that the latest version is always used and that the repository file size is reduced.

1. Download [omp server](https://github.com/openmultiplayer/server-beta/releases) and extract it to the root directory, i.e. `omp-server[.exe]` and `components` folder

2. Download [samp-node](https://github.com/AmyrAhmady/samp-node/releases), put `samp-node.so/dll` in the root folder and `samp-node.so/dll` in the plugins folder.

3. As above, download and install the [streamer plugin](https://github.com/samp-incognito/samp-streamer-plugin/releases).
4. Change `rcon.password` in `config.json` to other values
5. `pnpm install` (install dependencies)
6. `pnpm dev` (start listening compile & auto-restart server)

## Advantages

- Open.mp for the next generation.
- Fully embrace the powerful node.js ecosystem.
- Better data types and maintainability.
- Convenient asynchronous operations.
- Internationalization support for different character sets depending on the player.
- Reduce a lot of original code and function dependencies.

## Notice

- dist folder is now cleared before execution so that the first run will report an error and **the service will run normally on the second restart**.
  - since `rollup` and `nodemon` run at the same time, the server will automatically restart after `rollup` is compiled, so running dev will start the server twice.
- If necessary, you can refer to existing wrappers to implement other plugins.
- You can try to deploy in a `docker` container.
- `samp-node` requires compliance with the `cjs` specification and has been converted from `esm` to `cjs` via `rollup`.
