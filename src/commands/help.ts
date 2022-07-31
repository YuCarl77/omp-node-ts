import CmdBus from "@/utils/CmdBus";
import Dialog from "@/utils/Dialog";
import { $t } from "@/utils/i18n";
import { DIALOG_STYLE } from "samp-node-lib";

const helpDialog = new Dialog({
  style: DIALOG_STYLE.MSGBOX,
  caption: $t("dialog.help.caption"),
  info: $t("dialog.help.info"),
  button1: $t("dialog.help.button1"),
  button2: "",
});

CmdBus.on("help", async function () {
  // setTimeout(() => {
  //   Dialog.close(this);
  // }, 3000);
  const res = await helpDialog.show(this);
  console.log(res);
});
