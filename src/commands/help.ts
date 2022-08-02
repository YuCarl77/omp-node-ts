import CmdBus from "@/utils/CmdBus";
import Dialog from "@/utils/Dialog";
import { $t } from "@/utils/i18n";
import { DIALOG_STYLE } from "samp-node-lib";

const helpDialog = new Dialog({
  style: DIALOG_STYLE.MSGBOX,
});

CmdBus.on("help", async function () {
  // setTimeout(() => {
  //   Dialog.close(this);
  // }, 3000);
  helpDialog.caption = $t("dialog.help.caption", [], this.locale);
  helpDialog.info = $t("dialog.help.info", [], this.locale);
  helpDialog.button1 = $t("dialog.help.button1", [], this.locale);
  const res = await helpDialog.show(this);
  console.log(res);
});
