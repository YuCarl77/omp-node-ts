import CmdBus from "@/utils/CmdBus";
import Color from "@/enums/color";
import { $t } from "@/utils/i18n";
import { SendClientMessage } from "@/wrappers/i18n";

/* The tentative idea is to implement interception of commands through decorators, 
for example, to block access only after login or only for administrators. */
CmdBus.on(["r", "race"], function (...args) {
  // subcommand command
  // means like /r s or /race s
  const [subcommand, ...others] = args;
  if (subcommand === "s") {
    SendClientMessage(this, Color.white, $t("tips.cmd.next", others));
  }
});
