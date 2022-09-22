import { ColorEnum } from "@/enums/color";
import { $t } from "@/i18n";
import { CmdBus } from "omp-node-lib";

/* The tentative idea is to implement interception of commands through decorators, 
for example, to block access only after login or only for administrators. */
CmdBus.on(["race"], function (...args) {
  // subcommand command
  // means like /race s
  const [subcommand, ...next] = args;
  if (subcommand === "s") {
    this.sendClientMessage(
      ColorEnum.White,
      $t("tips.cmd.next", [next.toString()], this.locale)
    );
  }
});
