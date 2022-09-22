import { BaseGameMode, BasePlayer, IPlayerSettings } from "omp-node-lib";

export class MyPlayer extends BasePlayer {
  public settings: IPlayerSettings = { charset: BaseGameMode.charset };
}
