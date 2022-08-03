import ColorEnum from "@/enums/color";
import { CharsetEnum } from "@/enums/language";
import Player from "@/models/player";
import CmdBus from "@/utils/CmdBus";
import Dialog from "@/utils/Dialog";
import { $t, locale, locales } from "@/utils/i18n";
import { GetPlayerName, SendClientMessage } from "@/wrappers/helper";
import { DIALOG_STYLE } from "samp-node-lib";

CmdBus.on(["language", "lang"], function () {
  chooseLanguage(this);
});

const chooseLangDialog = new Dialog({
  style: DIALOG_STYLE.LIST,
  caption: "Please select the interface language",
  info: Object.values(locales).reduce(
    (prev: string, curr: locale, idx: number): string => {
      return `${prev}${idx + 1}.${curr.label}\n`;
    },
    ""
  ),
  button1: "ok",
});

// windows system use ansi
const charsets = Object.values(CharsetEnum);
const chooseCharsetDialog = new Dialog({
  style: DIALOG_STYLE.LIST,
  caption: "Please select your system's charset",
  info: charsets.reduce((prev: string, curr, idx: number): string => {
    return `${prev}${idx + 1}.${curr}\n`;
  }, ""),
  button1: "ok",
});

export const chooseLanguage = (p: Player) => {
  return new Promise(async (resolve) => {
    const { listitem: lang } = await chooseLangDialog.show(p);
    p.locale = lang;
    const { listitem: charsetIdx } = await chooseCharsetDialog.show(p);
    p.charset = charsets[charsetIdx];
    p.name = GetPlayerName(p);
    SendClientMessage(
      p,
      ColorEnum.white,
      $t("dialog.lang.change", [locales[p.locale].label], p.locale)
    );
    resolve(p);
  });
};
