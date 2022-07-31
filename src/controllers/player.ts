import { OnPlayerConnect, OnPlayerDisconnect, SampPlayer } from "samp-node-lib";
import { $t } from "@/utils/i18n";
import {
  GetPlayerName,
  OnPlayerText,
  SendClientMessage,
  SendClientMessageToAll,
} from "@/wrappers/helper";
import ColorEnum from "@/enums/color";
import Player from "@/models/player";

OnPlayerConnect((connector: SampPlayer) => {
  const p = new Player(connector.playerid);
  p.name = GetPlayerName(p);
  Player.Players.set(connector.playerid, p);
  SendClientMessageToAll(ColorEnum.blue, $t("server.welcome", [p.name]));
  SendClientMessage(p, ColorEnum.white, $t("server.greet", [p.name, p.id]));
});

OnPlayerDisconnect((player: SampPlayer): void => {
  if (Player.Players.has(player.playerid))
    Player.Players.delete(player.playerid);
});

OnPlayerText((player: Player, text: string): void => {
  SendClientMessageToAll(
    ColorEnum.white,
    `${player.name}(${player.id}): ${text}`
  );
});
