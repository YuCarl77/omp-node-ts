import { exit } from "process";
import { OnGameModeExit, OnGameModeInit } from "samp-node-lib";

const registerGameMode = (init: () => void) => {
  OnGameModeInit((): void => {
    // do something during initialization, such as load some objects
    // final callback to main.ts
    init();
  });

  OnGameModeExit((): void => {
    // do something during close/restart server, such as storage of player data
    exit();
  });
};

export default registerGameMode;
