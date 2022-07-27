import { encode, decode, encodingExists } from "iconv-lite";
import LanguageEnum from "@/enums/language";

import zh_cn from "./locales/zh-cn.json";
import en from "./locales/en.json";

// 定义语言，用于后续定位国际化
// sa:mp的字符集取决于windows，中文默认是gbk/gb2312
// 重置版应该都是utf8
// 也有情况是中文但采用gbk的，比如控制台/重置版,还要考虑一下

const locales = {
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
  if (encodingExists(charset)) {
    if (["utf-8", "utf8"].includes(charset))
      throw new Error(`[i18n]: no conversion required ${charset}`);
    return;
  }
  throw new Error(`[i18n]: unknown charset ${charset}`);
};

// convert utf8 strings to different encoded byte stream arrays
// used to solve the internationalization language display display messy problem
// https://github.com/AmyrAhmady/samp-node/issues/2
const encodeToBuf = (content: string, charset: string): number[] => {
  isValidate(charset);
  return [...encode(content, charset), 0];
};

// convert byte stream arrays of different encodings to utf8 strings
const decodeFromBuf = (buf: Buffer | number[], charset: string): string => {
  isValidate(charset);
  const buffer = buf instanceof Buffer ? buf : Buffer.from(buf);
  return decode(buffer, charset);
};

const $t = function (
  key: string,
  replaceable?: any[],
  lang?: LanguageEnum
): string {
  const { value } = locales[lang ? lang : LanguageEnum.Chinese];
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

export { $t, encodeToBuf, decodeFromBuf, locales };
