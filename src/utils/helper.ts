// Here are some internationalized functions that are encapsulated and used to override the original functions
import { rgba } from "samp-node-lib";
import { decodeFromBuf, encodeToBuf } from "@/utils/i18n";
import Player from "@/models/player";
import type { IDialog } from "@/utils/Dialog";
import config from "@/config";
import { PlayerEnum } from "@/enums/samp";

type processTuple = [string, string | number[]];

export const processMsg = (msg: string, charset: string): processTuple => {
  const res: string | number[] = ["utf8", "utf-8"].includes(charset)
    ? msg
    : encodeToBuf(msg, charset);
  const flag = res instanceof Array ? "a" : "s";
  return [flag, res];
};

export const SendClientMessage = (
  player: Player,
  color: string,
  msg: string
): number => {
  const res = processMsg(msg, player.charset);
  return samp.callNative(
    "SendClientMessage",
    `ii${res[0]}`,
    player.id,
    rgba(color),
    res[1]
  );
};

export const SendClientMessageToAll = (color: string, msg: string): number => {
  Player.Players.forEach((player) => SendClientMessage(player, color, msg));
  return 1;
};

export const ShowPlayerDialog = (
  player: Player,
  id: number,
  dialog: IDialog
): number => {
  const { charset } = player;
  const { style, caption, info, button1, button2 } = dialog;
  const [flag, processCaption] = processMsg(caption || "", charset);
  const [, processInfo] = processMsg(info || "", charset);
  const [, processButton1] = processMsg(button1 || "", charset);
  const [, processButton2] = processMsg(button2 || "", charset);
  return samp.callNative(
    "ShowPlayerDialog",
    `iii${flag.repeat(4)}`,
    player.id,
    id,
    style,
    processCaption,
    processInfo,
    processButton1,
    processButton2
  );
};

// see https://github.com/AmyrAhmady/samp-node/wiki/Events#sampnode_callevent.
// in short, when you write the flag a, you must add I after it, but this I will actually be ignored.

samp.registerEvent("OnPlayerTextI18n", "iai");
export const OnPlayerText = (fn: (player: Player, text: string) => void) => {
  // get the player input text
  // and you can decode with the player's charset;
  samp.on("OnPlayerTextI18n", (playerid: number, buf: number[]): void => {
    const p = Player.Players.get(playerid);
    if (p) fn(p, decodeFromBuf(buf, p.charset));
  });
};

samp.registerEvent("OnPlayerCommandTextI18n", "iai");
export const OnPlayerCommandText = (
  fn: (player: Player, cmdtext: string) => void
) => {
  samp.on(
    "OnPlayerCommandTextI18n",
    (playerid: number, buf: number[]): number => {
      const p = Player.Players.get(playerid);
      if (p) fn(p, decodeFromBuf(buf, p.charset));
      return 1;
    }
  );
};

samp.registerEvent("OnDialogResponseI18n", "iiiiai");
export const OnDialogResponse = (
  fn: (
    player: Player,
    response: number,
    listitem: number,
    inputtext: string
  ) => void
) => {
  samp.on(
    "OnDialogResponseI18n",
    (
      playerid: number,
      dialogid: number,
      response: number,
      listitem: number,
      inputbuf: number[]
    ): void => {
      const p = Player.Players.get(playerid);
      if (!p) return;
      fn(p, response, listitem, decodeFromBuf(inputbuf, p.charset));
    }
  );
};

samp.registerEvent("OnClientMessageI18n", "iai");
export const OnClientMessage = (fn: (color: number, text: string) => void) => {
  samp.on("OnClientMessageI18n", (color: number, buf: number[]): void => {
    fn(color, decodeFromBuf(buf, config.charset));
  });
};

samp.registerEvent("OnRconCommandI18n", "ai");
export const OnRconCommand = (fn: (cmd: string) => void) => {
  samp.on("OnRconCommandI18n", (buf: number[]): void => {
    fn(decodeFromBuf(buf, config.charset));
  });
};

samp.registerEvent("OnRconLoginAttemptI18n", "aiaii");
export const OnRconLoginAttempt = (
  fn: (ip: string, password: string, success: number) => void
) => {
  samp.on(
    "OnRconLoginAttemptI18n",
    (ip: number[], password: number[], success: number): void => {
      const { charset } = config;
      fn(decodeFromBuf(ip, charset), decodeFromBuf(password, charset), success);
    }
  );
};

samp.registerEvent("OnNPCDisconnectI18n", "ai");
export const OnNPCDisconnect = (fn: (reason: string) => void) => {
  samp.on("OnNPCDisconnectI18n", (buf: number[]): void => {
    fn(decodeFromBuf(buf, config.charset));
  });
};

export const GetPlayerName = (player: Player): string => {
  const buf: number[] = samp.callNative(
    "GetPlayerName",
    "iAi",
    player.id,
    PlayerEnum.MAX_PLAYER_NAME
  );
  return decodeFromBuf(buf.slice(0, buf.indexOf(0)), player.charset);
};
