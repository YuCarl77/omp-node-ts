import { GameModeExit, OnGameModeExit, OnGameModeInit } from "samp-node-lib";
import { $t } from "@/utils/i18n";

// register all commands
import "@/commands";
// register all events without gamemode
import "./events";

class GameMode {
  private static instance: GameMode;
  private initialized: boolean = false;
  private constructor() {}
  public static getInstance(): GameMode {
    if (!GameMode.instance) GameMode.instance = new GameMode();
    return GameMode.instance;
  }

  public init(func: () => void): void {
    if (this.initialized) {
      throw new Error($t("error.initTwice"));
    }
    this.initialized = true;
    OnGameModeInit((): void => {
      // do something during initialization, such as load some objects
      // final callback to main.ts
      func();
    });

    OnGameModeExit((): void => {
      // do something during close/restart server, such as storage of player data
    });
  }

  public exit(func: () => void): void {
    if (!this.initialized) return;
    this.initialized = false;
    GameModeExit();
    func();
  }
}

export { GameMode };
