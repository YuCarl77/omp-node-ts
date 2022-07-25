import { rgba } from "samp-node-lib";
import { encodeToBuf } from "../utils/i18n";
import Player from "@/models/player";
import type { DialogImpl } from "@/utils/Dialog";

type processTuple = [string, string | number[]];

const processMsg = (msg: string, charset: string): processTuple => {
  const res: string | number[] = ["utf8", "utf-8"].includes(charset)
    ? msg
    : encodeToBuf(msg, charset);
  const flag = res instanceof Array ? "a" : "s";
  return [flag, res];
};

const SendClientMessage = (
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

const SendClientMessageToAll = (color: string, msg: string): number => {
  Player.Players.forEach((player) => SendClientMessage(player, color, msg));
  return 1;
};

const ShowPlayerDialog = (
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
export {
  SendClientMessage,
  SendClientMessageToAll,
  ShowPlayerDialog,
  processMsg,
};
