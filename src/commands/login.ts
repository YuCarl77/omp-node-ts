import { ColorEnum } from "@/enums/color";
import { $t } from "@/i18n";
import { CmdBus } from "omp-node-lib";

CmdBus.on(["r", "reg", "register"], function (...args) {
  this.sendClientMessage(
    ColorEnum.White,
    $t("command.reg", [args], this.locale)
  );
});

CmdBus.on(["l", "login"], function (...args) {
  this.sendClientMessage(
    ColorEnum.White,
    $t("command.login", [args], this.locale)
  );
});
