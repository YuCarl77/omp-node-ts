import Language from "@/enums/language";
import { encode, decode, encodingExists } from "iconv-lite";

import zh_cn from "./locales/zh-cn.json";
import en from "./locales/en.json";

// 定义语言，用于后续定位国际化
// sa:mp的字符集取决于windows，中文默认是gbk/gb2312
// 重置版应该都是utf8
// 也有情况是中文但采用gbk的，比如控制台/重置版,还要考虑一下

const locales = {
  [Language.Chinese]: {
    charset: "gbk",
    value: zh_cn,
  },
  [Language.English]: {
    charset: "utf8",
    value: en,
  },
};

// 用于字符串找对象的属性对应值
// "server.welcome" => zh_cn["server"]["welcome"];
const dotValue = (initObj: Object, property: string) => {
  const keyArr: string[] = property.split(".");
  return keyArr.reduce((obj, key) => {
    return obj.hasOwnProperty(key) ? obj[key] : undefined;
  }, initObj) as string | undefined;
};

// 转换字符编码
// 当前的问题是，可能存在相同的字符集，而不需要转换但仍在转换。
// if (["utf-8", "utf8"].includes(language)) return text;
const encodeLang = (text: string, charset: string): string => {
  if (!encodingExists(charset))
    throw new Error(`[i18n]: unsupported encoding type ${charset}`);
  return encode(text, charset);
  // const buf = encode(text, charset);
  // return decode(buf, "utf-8");
};

// 国际化函数
const $t = function (
  key: string,
  replaceable?: any[],
  lang?: Language
): string {
  const { value, charset } = locales[lang ? lang : Language.Chinese];
  let text = dotValue(value, key);
  if (text === undefined) return "undefined";
  text = encodeLang(text, charset);
  if (replaceable === undefined || replaceable.length === 0) return text;
  // %s 占位替换
  const placeholder = /%s/i;
  for (let i = 0; i < replaceable.length; i++) {
    const matches = text.match(placeholder);
    if (matches === null) break;
    text = text.replace(placeholder, encodeLang(replaceable[i], charset));
  }
  return text;
};

export default $t;
