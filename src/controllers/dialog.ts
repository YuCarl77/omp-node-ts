import Player from "@/models/player";
//import { decodeFromBuf } from "@/utils/i18n";
import { OnDialogResponse, SampPlayer } from "samp-node-lib";

const waitingDialogs: Map<Number, Function> = new Map();
const delDialogRecord = (player: Player): boolean => {
  if (waitingDialogs.has(player.id)) {
    waitingDialogs.delete(player.id);
    return true;
  }
  return false;
};

OnDialogResponse(
  (
    player: SampPlayer,
    dialogid: number,
    response: number,
    listitem: number,
    inputtext: string
  ) => {
    const resolve = waitingDialogs.get(player.playerid);
    if (!resolve) return;
    const p = Player.Players.get(player);
    if (!p) return;
    // unfinished:
    // reverse decoding to utf8
    // inputtext = decodeFromBuf(inputtext, p.charset);
    // bug: does not trigger resolve of promise
    resolve({ response, listitem, inputtext });
  }
);

export { waitingDialogs, delDialogRecord };
