import config from "@/config";
import { LanguageEnum } from "@/enums/language";

interface Settings {
  locale: LanguageEnum;
  charset: string;
}

// It is currently inherited because some function api depend on it and should be removed later
class Player {
  public static Players: Map<Number, Player> = new Map();
  public id: number;
  public name: string = "";
  public settings: Settings = {
    locale: config.language,
    charset: config.charset,
  };
  constructor(id: number, settings?: Settings) {
    this.id = id;
    if (settings) this.settings = settings;
  }
  get charset() {
    return this.settings.charset;
  }
  set charset(charset: string) {
    this.settings.charset = charset;
  }
  get locale(): LanguageEnum {
    return this.settings.locale;
  }
  set locale(language: LanguageEnum) {
    this.settings.locale = language;
  }
}

export default Player;
