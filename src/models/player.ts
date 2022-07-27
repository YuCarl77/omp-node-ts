import LanguageEnum from "@/enums/language";
import { locales } from "@/utils/i18n";
import { SampPlayer } from "samp-node-lib";

interface Settings {
  locale: LanguageEnum;
}

// It is currently inherited because some function api depend on it and should be removed later
class Player {
  public static Players: Map<Number, Player> = new Map();
  public id: number;
  public name: string;
  public settings: Settings = {
    locale: LanguageEnum.Chinese,
  };
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  get charset() {
    return locales[this.settings.locale].charset;
  }
}

export default Player;
