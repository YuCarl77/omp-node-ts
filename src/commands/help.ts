import CmdBus from "@/utils/CmdBus";
import Dialog, { DialogResponse } from "@/utils/Dialog";
import { $t } from "@/utils/i18n";
import { DIALOG_STYLE } from "samp-node-lib";

const helpDialog = new Dialog({
  style: DIALOG_STYLE.MSGBOX,
  caption: $t("dialog.help.caption"),
  info: $t("dialog.help.info"),
  button1: $t("dialog.help.button1"),
  button2: "",
});

CmdBus.on("help", function () {
  // show help dialog
  // Unable to use promise, it looks like it will be recycled by the garbage mechanism.
  // It is not clear whether it is a problem with samp-node. If anyone can solve the problem, they can initiate pull-request.
  helpDialog.show(this, (res: DialogResponse) => {
    console.log(res);
  });
});
