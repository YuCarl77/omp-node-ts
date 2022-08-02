import config from "@/config";
import LanguageEnum from "@/enums/language";
import { locales } from "@/utils/i18n";

interface Settings {
  locale: LanguageEnum;
}

// It is currently inherited because some function api depend on it and should be removed later
class Player {
  public static Players: Map<Number, Player> = new Map();
  public id: number;
  public name: string = "";
  public settings: Settings = {
    locale: config.language,
  };
  constructor(id: number, settings?: Settings) {
    this.id = id;
    if (settings) this.settings = settings;
  }
  get charset() {
    return locales[this.settings.locale].charset;
  }
  get locale(): LanguageEnum {
    return this.settings.locale;
  }
  set locale(language: LanguageEnum) {
    this.settings.locale = language;
  }
}

export default Player;
