import CmdBus from "@/utils/CmdBus";
import ColorEnum from "@/enums/color";
import { $t } from "@/utils/i18n";
import { SendClientMessage } from "@/utils/helper";

/* The tentative idea is to implement interception of commands through decorators, 
for example, to block access only after login or only for administrators. */
CmdBus.on(["race"], function (...args) {
  // subcommand command
  // means like /race s
  const [subcommand, ...next] = args;
  if (subcommand === "s") {
    SendClientMessage(
      this,
      ColorEnum.white,
      $t("tips.cmd.next", [next.toString()], this.locale)
    );
  }
});
