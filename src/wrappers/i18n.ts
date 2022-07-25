import { rgba, SampPlayer } from "samp-node-lib";

import { encodeToBuf } from "../utils/i18n";

const SendClientMessage = (
  player: SampPlayer,
  msg: string,
  color: string,
  charset: string
): number => {
  return samp.callNative(
    "SendClientMessage",
    "iia",
    player.playerid,
    rgba(color),
    encodeToBuf(msg, charset)
  );
};

export { SendClientMessage };
