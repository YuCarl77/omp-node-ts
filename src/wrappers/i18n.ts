import { rgba } from "samp-node-lib";
import { decodeFromBuf, encodeToBuf } from "../utils/i18n";
import Player from "@/models/player";
import type { DialogImpl } from "@/utils/Dialog";

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
  dialog: DialogImpl
): number => {
  const { charset } = player;
  const { style, caption, info, button1, button2 } = dialog;
  const [flag, processCaption] = processMsg(caption, charset);
  const [, processInfo] = processMsg(info, charset);
  const [, processButton1] = processMsg(button1, charset);
  const [, processButton2] = processMsg(button2, charset);
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

// export const OnPlayerText = (playerid: number, buffer: number[]): void => {
//   // get the player input text
//   // and you can decode with the player's charset;
//   console.log(playerid, buffer);
// };

// see https://github.com/AmyrAhmady/samp-node/wiki/Events#sampnode_callevent.
// in short, when you write the flag a, you must add I after it, but this I will actually be ignored.

samp.registerEvent("OnPlayerTextI18n", "iai");
export const OnPlayerText = (fn: (player: Player, text: string) => void) => {
  // get the player input text
  // and you can decode with the player's charset;
  samp.on("OnPlayerTextI18n", (playerid: number, buf: number[]): void => {
    const p = Player.Players.get(playerid);
    if (!p) return;
    fn(p, decodeFromBuf(buf, p.charset));
  });
};
