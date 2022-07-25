import { OnPlayerConnect, OnPlayerDisconnect, SampPlayer } from "samp-node-lib";
import { $t } from "@/utils/i18n";
import { SendClientMessage, SendClientMessageToAll } from "@/wrappers/i18n";
import { PlayerEnum } from "@/enums/samp";
import ColorEnum from "@/enums/color";
import Player from "@/models/player";

OnPlayerConnect((connector: SampPlayer) => {
  const p = new Player(
    connector.playerid,
    connector.GetPlayerName(PlayerEnum.MAX_PLAYER_NAME)
  );
  Player.Players.set(connector, p);
  SendClientMessageToAll(ColorEnum.blue, $t("server.welcome", [p.name]));
  SendClientMessage(p, ColorEnum.white, $t("server.greet", [p.name, p.id]));
});

OnPlayerDisconnect((player: SampPlayer) => {
  if (Player.Players.has(player)) Player.Players.delete(player);
});
