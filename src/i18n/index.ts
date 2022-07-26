import { LanguageEnum } from "@/enums/language";
import { I18n, TLocales } from "omp-node-lib";
import zh_cn from "./locales/zh-cn.json";
import en from "./locales/en.json";

export const locales: TLocales = {
  [LanguageEnum.Chinese]: {
    label: "Chinese",
    value: zh_cn,
  },
  [LanguageEnum.English]: {
    label: "English",
    value: en,
  },
};

export const { $t } = new I18n(LanguageEnum.English, locales);
