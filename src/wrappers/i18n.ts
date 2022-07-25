import { rgba } from "samp-node-lib";
import { encodeToBuf, locales } from "../utils/i18n";
import Player from "@/controllers/player";

const processMsg = (msg: string, charset: string) => {
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
  const { charset } = locales[player.settings.locale];
  const res = processMsg(msg, charset);
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

export { SendClientMessage, SendClientMessageToAll };
