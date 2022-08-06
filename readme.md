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

I think with `node.js`, you can embrace the idea of oop and a wide range of libraries without relying on `pawn plugins` to the greatest extent.

For example, we can use node.js 's `mongodb/mysql` library to operate the database, and we can also operate asynchronously, or we can use fs to manipulate files or folders.

But for the `necessary libraries`, you need to encapsulate the `wrapper` to implement, such as the `streamer plugin`, if you want to write through node.js, you need to encapsulate an underlying `native caller / public caller` that calls `samp-node`.

For the `native added by OMP`, the principle should be wrapped in the same way as described above.

If you look at the `samp-node-lib` code, you will see that the underlying calls are to `native caller / public caller`.

You can try to deploy in a `docker` container.

## Notice

- `samp-node` requires compliance with the `cjs` specification and has been converted from `esm` to `cjs` via `rollup`.
- dist folder is now cleared before execution so that the first run will report an error and **the service will run normally on the second restart**. since `rollup` and `nodemon` run at the same time, the server will automatically restart after `rollup` is compiled, so running dev will start the server twice.
