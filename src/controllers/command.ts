import CmdBus from "@/utils/CmdBus";
import ColorEnum from "@/enums/color";
import Player from "@/models/player";
import { SendClientMessage } from "@/wrappers/i18n";
import { OnPlayerCommandText, SampPlayer } from "samp-node-lib";
import { $t } from "@/utils/i18n";
/* 
    Use eventBus to observe and subscribe to level 1 instructions, 
    support string and array pass, array used for alias.

    Pass the split instruction through call array deconstruction or apply
    The first step is to extract the cmdtext with the re into an array, such as /car 411
    
    There may be many Spaces in the middle, but remove them all
  */
OnPlayerCommandText((player: SampPlayer, cmdtext: string): number | void => {
  const p = Player.Players.get(player);
  if (!p) return;
  const regCmdtext = cmdtext.match(/[^/\s]+/gi);
  if (regCmdtext === null || regCmdtext.length === 0) {
    SendClientMessage(p, ColorEnum.yellow, $t("error.commandFormat"));
    return 1;
  }
  const exist: boolean = CmdBus.emit(p, regCmdtext[0], regCmdtext.splice(1));
  if (!exist) {
    SendClientMessage(
      p,
      ColorEnum.white,
      $t("error.commandUndefined", [cmdtext])
    );
  }
  return 1;
});
