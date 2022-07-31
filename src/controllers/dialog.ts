import Player from "@/models/player";
import { OnDialogResponse } from "@/wrappers/helper";

const waitingDialogs: Map<Number, Function> = new Map();
const delDialogRecord = (player: Player): boolean => {
  if (waitingDialogs.has(player.id)) {
    waitingDialogs.delete(player.id);
    return true;
  }
  return false;
};

OnDialogResponse(
  (player: Player, response: number, listitem: number, inputtext: string) => {
    const callback = waitingDialogs.get(player.id);
    if (!callback) return;
    // bug: does not trigger resolve of promise
    // fix: it only works if you put it in an event loop
    process.nextTick(() => callback({ response, listitem, inputtext }));
  }
);

export { waitingDialogs, delDialogRecord };
