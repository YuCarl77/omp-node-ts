import LanguageEnum from "@/enums/language";
import { SampPlayer } from "samp-node-lib";

interface Settings {
  locale: LanguageEnum;
}

// It is currently inherited because some function api depend on it and should be removed later
class Player extends SampPlayer {
  public static Players: Map<SampPlayer, Player> = new Map();
  public id: number;
  public name: string;
  public settings: Settings = {
    locale: LanguageEnum.Chinese,
  };
  constructor(id: number, name: string) {
    super(id);
    this.id = id;
    this.name = name;
  }
}

export default Player;
