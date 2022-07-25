import { GameModeExit } from "samp-node-lib";
import { $t } from "@/utils/i18n";

// register all commands
import "@/commands";
// register all events without gamemode
import "./events";
import registerGameMode from "./gamemode";

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
    registerGameMode(func);
  }

  public exit(func: () => void): void {
    if (!this.initialized) return;
    this.initialized = false;
    GameModeExit();
    func();
  }
}

export { GameMode };
