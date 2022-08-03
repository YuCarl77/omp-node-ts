// You can define some configuration items and export them for use elsewhere.
import { LanguageEnum, CharsetEnum } from "@/enums/language";

const config = {
  // default language for console and initial players
  language: LanguageEnum.English,
  charset: CharsetEnum.Common,
};

export default config;
