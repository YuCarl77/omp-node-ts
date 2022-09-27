import { playerEvent } from "@/controller/player/commonEvent";
import { ColorEnum } from "@/enums/color";
import { $t } from "@/i18n";

playerEvent.cmdBus.on(["race"], function (...args) {
  // subcommand command, means like /race s
  const [subcommand, ...next] = args;
  if (subcommand === "s") {
    this.sendClientMessage(
      ColorEnum.White,
      $t("command.next", [next.toString()], this.locale)
    );
    return 1;
  }
  return 0;
});
