import { encode, decode, encodingExists } from "iconv-lite";
import LanguageEnum from "@/enums/language";

import zh_cn from "./locales/zh-cn.json";
import en from "./locales/en.json";
import config from "@/config";
import { AllowNickNameCharacter } from "@/wrappers/omp";

export const locales = {
  [LanguageEnum.Chinese]: {
    charset: "gbk",
    value: zh_cn,
  },
  [LanguageEnum.English]: {
    charset: "utf8",
    value: en,
  },
};

// "server.welcome" => zh_cn["server"]["welcome"];
const dotValue = (whichLangJson: any, property: string): string => {
  const keyArr: string[] = property.split(".");
  return keyArr.reduce((obj: any, key: string) => {
    if (!obj.hasOwnProperty(key))
      throw new Error(`[i18n]: cannot find ${property}`);
    return obj[key];
  }, whichLangJson) as string;
};

// determine if the incoming character encoding type is valid
const isValidate = (charset: string): void => {
  if (!encodingExists(charset))
    throw new Error(`[i18n]: unknown charset ${charset}`);
};

// convert utf8 strings to different encoded byte stream arrays
// used to solve the internationalization language display display messy problem
// https://github.com/AmyrAhmady/samp-node/issues/2
export const encodeToBuf = (content: string, charset: string): number[] => {
  isValidate(charset);
  return [...encode(content, charset), 0];
};

// convert byte stream arrays of different encodings to utf8 strings
export const decodeFromBuf = (
  buf: Buffer | number[],
  charset: string
): string => {
  isValidate(charset);
  const buffer = buf instanceof Buffer ? buf : Buffer.from(buf);
  return decode(buffer, charset);
};

export const $t = function (
  key: string,
  replaceable?: any[],
  lang?: LanguageEnum
): string {
  const { value } = locales[lang ? lang : config.language];
  let text = dotValue(value, key);
  if (text === undefined) return "undefined";
  if (replaceable && replaceable.length) {
    // %s 占位替换
    const placeholder = /%s/i;
    for (let i = 0; i < replaceable.length; i++) {
      const matches = text.match(placeholder);
      if (matches === null) break;
      text = text.replace(placeholder, replaceable[i]);
    }
  }
  return text;
};

// Allow all bytes of user nicknames, if you need to specify nickname rules, please pass regular expression checks when the player connects.
// In utf8, different national languages take up different numbers of bytes, but no matter how many bytes they take up, a byte always takes up 8 bits of binary, i.e., a decimal integer up to 255.
export const allowMultibyteNicknames = () => {
  for (let i = 0; i < 255; i++) {
    AllowNickNameCharacter(i, true);
  }
};
