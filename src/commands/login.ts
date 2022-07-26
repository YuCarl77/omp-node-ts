import { playerEvent } from "@/controller/player/commonEvent";
import { ColorEnum } from "@/enums/color";
import { $t } from "@/i18n";

playerEvent.onCommandText(["r", "reg", "register"], (player, ...args) => {
  player.sendClientMessage(
    ColorEnum.White,
    $t("command.reg", [args], player.locale)
  );
  return 1;
});

playerEvent.onCommandText(["l", "login"], (player, ...args) => {
  player.sendClientMessage(
    ColorEnum.White,
    $t("command.login", [args], player.locale)
  );
  return true;
});
