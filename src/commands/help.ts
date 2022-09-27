import { MyDialog } from "@/controller/dialog/commonStruct";
import { playerEvent } from "@/controller/player/commonEvent";
import { $t } from "@/i18n";
import { DialogStylesEnum, logger } from "omp-node-lib";

const helpDialog = new MyDialog({
  style: DialogStylesEnum.MSGBOX,
});

playerEvent.cmdBus.on("help", async function () {
  helpDialog.caption = $t("dialog.help.caption", null, this.locale);
  helpDialog.info = $t("dialog.help.info", null, this.locale);
  helpDialog.button1 = $t("dialog.help.button1", null, this.locale);
  const res = await helpDialog.show(this);
  logger.info(res);
  return 1;
});
