import ColorEnum from "@/enums/color";
import LanguageEnum from "@/enums/language";
import Player from "@/models/player";
import CmdBus from "@/utils/CmdBus";
import Dialog from "@/utils/Dialog";
import { $t, locales } from "@/utils/i18n";
import { GetPlayerName, SendClientMessage } from "@/wrappers/helper";
import { DIALOG_STYLE } from "samp-node-lib";

CmdBus.on(["language", "lang"], function () {
  chooseLanguage(this);
});

const chooseLangDialog = new Dialog({
  style: DIALOG_STYLE.LIST,
  caption: "Please select a language",
  info: Object.values(locales).reduce(
    (prev: string, curr, idx: number): string => {
      return `${prev}${idx + 1}.${curr.label}\n`;
    },
    ""
  ),
  button1: "ok",
});

export const chooseLanguage = (p: Player) => {
  return new Promise(async (resolve) => {
    const { listitem } = await chooseLangDialog.show(p);
    p.locale = LanguageEnum[listitem ? "English" : "Chinese"];
    p.name = GetPlayerName(p);
    SendClientMessage(
      p,
      ColorEnum.white,
      $t("dialog.lang.change", [locales[p.locale].label], p.locale)
    );
    resolve(p);
  });
};
