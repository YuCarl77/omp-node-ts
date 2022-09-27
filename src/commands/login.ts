import { playerEvent } from "@/controller/player";
import { ColorEnum } from "@/enums/color";
import { $t } from "@/i18n";

playerEvent.cmdBus.on(["r", "reg", "register"], function (...args) {
  this.sendClientMessage(
    ColorEnum.White,
    $t("command.reg", [args], this.locale)
  );
  return 1;
});

playerEvent.cmdBus.on(["l", "login"], function (...args) {
  this.sendClientMessage(
    ColorEnum.White,
    $t("command.login", [args], this.locale)
  );
  return true;
});
