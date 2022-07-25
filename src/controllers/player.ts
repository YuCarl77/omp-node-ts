import { OnPlayerConnect, OnPlayerDisconnect, SampPlayer } from "samp-node-lib";
import ColorEnum from "@/enums/color";
import LanguageEnum from "@/enums/language";
import { $t } from "@/utils/i18n";
import { SendClientMessage, SendClientMessageToAll } from "@/wrappers/i18n";
import { PlayerEnum } from "@/enums/samp";

interface Settings {
  locale: LanguageEnum;
}

const Players: Map<SampPlayer, Player> = new Map();
// It is currently inherited because some function api depend on it and should be removed later
class Player extends SampPlayer {
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

OnPlayerConnect((connector: SampPlayer) => {
  const p = new Player(
    connector.playerid,
    connector.GetPlayerName(PlayerEnum.MAX_PLAYER_NAME)
  );
  Players.set(connector, p);
  SendClientMessageToAll(ColorEnum.blue, $t("server.welcome", [p.name]));
  SendClientMessage(p, ColorEnum.white, $t("server.greet", [p.name, p.id]));
});

OnPlayerDisconnect((player: SampPlayer) => {
  if (Players.has(player)) Players.delete(player);
});

export { Players, Player };
