import { rgba } from "samp-node-lib";
import { encodeToBuf, locales } from "../utils/i18n";
import type { Player } from "@/controllers/player";

const SendClientMessage = (
  player: Player,
  msg: string,
  color: string
): number => {
  return samp.callNative(
    "SendClientMessage",
    "iia",
    player.id,
    rgba(color),
    encodeToBuf(msg, locales[player.settings.locale].charset)
  );
};

export { SendClientMessage };
