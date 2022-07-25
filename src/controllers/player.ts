import {
  OnPlayerConnect,
  OnPlayerDisconnect,
  SendClientMessageToAll,
  SampPlayer,
} from "samp-node-lib";

import Color from "@/enums/color";
import { $t } from "@/utils/i18n";
import Language from "@/enums/language";
import { SendClientMessage } from "@/wrappers/i18n";

interface Settings {
  locale: Language;
}

class Player {
  public id: number;
  public name: string;
  public settings: Settings = {
    locale: Language.Chinese,
  };
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const Players: Map<SampPlayer, Player> = new Map();

OnPlayerConnect((connector: SampPlayer) => {
  const p = new Player(connector.playerid, connector.GetPlayerName(24));
  Players.set(connector, p);
  SendClientMessageToAll(Color.blue, $t("server.welcome", [p.name]));
  SendClientMessage(p, Color.white, $t("server.greet", [p.name, p.id]));
});

OnPlayerDisconnect((player: SampPlayer) => {
  if (Players.has(player)) Players.delete(player);
});

export { Players, Player };
