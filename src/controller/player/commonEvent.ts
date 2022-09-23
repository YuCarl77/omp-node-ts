import { chooseLanguage } from "@/commands";
import { ColorEnum } from "@/enums/color";
import {
  BasePlayerEvent,
  BodyPartsEnum,
  ICmdErr,
  InvalidEnum,
  KeysEnum,
  PlayerStateEnum,
  WeaponEnum,
} from "omp-node-lib";
import { MyPlayer } from "./commonStruct";

export class CommonPlayerEvent extends BasePlayerEvent<MyPlayer> {
  constructor() {
    super();
  }
  protected newPlayer(playerid: number): MyPlayer {
    return new MyPlayer(playerid);
  }
  protected onConnect(player: MyPlayer): number {
    (async () => {
      await chooseLanguage(player);
      player.sendClientMessage(
        ColorEnum.PrimaryBlue,
        `Server: hello ${player.getName()}`
      );
      player.sendClientMessage(
        ColorEnum.Warn,
        `Server: your version ${player.getVersion()}`
      );
      player.sendClientMessage(
        ColorEnum.White,
        `Server: your ip ${player.getIp()}`
      );
      player.sendClientMessage(
        ColorEnum.White,
        `Server: your ping ${player.getPing()}`
      );
      player.sendClientMessage(
        ColorEnum.White,
        `Server: your raw ip ${player.getRawIp()}`
      );
    })();
    return 1;
  }
  protected onDisconnect(player: MyPlayer, reason: number): number {
    this.getPlayersArr().forEach((p) => {
      p.sendClientMessage(
        ColorEnum.White,
        `Server: player ${player.getName()} disconnect because reason: ${reason}`
      );
    });
    return 1;
  }
  protected onText(player: MyPlayer, text: string): number {
    return 1;
  }
  protected onCommandError(player: MyPlayer, err: ICmdErr): number {
    player.sendClientMessage(
      ColorEnum.Danger,
      `Server: error command, code:${err.code}, err: ${err.msg}`
    );
    return 1;
  }
  protected onEnterExitModShop(
    player: MyPlayer,
    enterexit: number,
    interiorid: number
  ): number {
    return 1;
  }
  protected onClickMap(
    player: MyPlayer,
    fX: number,
    fY: number,
    fZ: number
  ): number {
    return 1;
  }
  protected onClickPlayer(
    player: MyPlayer,
    clickedPlayer: MyPlayer,
    source: number
  ): number {
    return 1;
  }
  protected onDeath(
    player: MyPlayer,
    killer: MyPlayer | InvalidEnum.PLAYER_ID,
    reason: number
  ): number {
    return 1;
  }
  protected onGiveDamage(
    player: MyPlayer,
    damage: MyPlayer,
    amount: number,
    weaponid: WeaponEnum,
    bodypart: BodyPartsEnum
  ): number {
    return 1;
  }
  protected onKeyStateChange(
    player: MyPlayer,
    newkeys: KeysEnum,
    oldkeys: KeysEnum
  ): number {
    player.sendClientMessage(
      ColorEnum.White,
      `${player.getName()} key state change ${Date.now()} ${newkeys} - ${oldkeys}`
    );
    return 1;
  }
  protected onRequestSpawn(player: MyPlayer): number {
    return 1;
  }
  protected onSpawn(player: MyPlayer): number {
    return 1;
  }
  protected onStateChange(
    player: MyPlayer,
    newstate: PlayerStateEnum,
    oldstate: PlayerStateEnum
  ): number {
    return 1;
  }
  protected onStreamIn(player: MyPlayer, forPlayer: MyPlayer): number {
    return 1;
  }
  protected onStreamOut(player: MyPlayer, forPlayer: MyPlayer): number {
    return 1;
  }
  protected onTakeDamage(
    player: MyPlayer,
    damage: MyPlayer | InvalidEnum.PLAYER_ID,
    amount: number,
    weaponid: WeaponEnum,
    bodypart: BodyPartsEnum
  ): number {
    return 1;
  }
  protected onUpdate(player: MyPlayer): number {
    return 1;
  }
  protected onInteriorChange(
    player: MyPlayer,
    newinteriorid: number,
    oldinteriorid: number
  ): number {
    return 1;
  }
  protected onPause(player: MyPlayer): number {
    player.sendClientMessage(
      ColorEnum.White,
      `${player.getName()} pause game ${Date.now()}`
    );
    return 1;
  }
  protected onResume(player: MyPlayer): number {
    player.sendClientMessage(
      ColorEnum.White,
      `${player.getName()} resume game ${Date.now()}`
    );
    return 1;
  }
  protected onRequestDownload(
    player: MyPlayer,
    type: number,
    crc: number
  ): number {
    return 1;
  }
  protected onFinishedDownloading(
    player: MyPlayer,
    virtualworld: number
  ): number {
    return 1;
  }
}
