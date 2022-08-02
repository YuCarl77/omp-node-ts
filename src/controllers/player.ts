import { OnPlayerConnect, OnPlayerDisconnect, SampPlayer } from "samp-node-lib";
import { $t } from "@/utils/i18n";
import {
  OnPlayerText,
  SendClientMessage,
  SendClientMessageToAll,
} from "@/wrappers/helper";
import ColorEnum from "@/enums/color";
import Player from "@/models/player";
import { chooseLanguage } from "@/commands";

OnPlayerConnect(async (connector: SampPlayer) => {
  const p = new Player(connector.playerid);
  Player.Players.set(connector.playerid, p);
  await chooseLanguage(p);
  Player.Players.forEach((player) =>
    SendClientMessage(
      player,
      ColorEnum.blue,
      $t("server.welcome", [p.name], p.locale)
    )
  );
  SendClientMessage(
    p,
    ColorEnum.white,
    $t("server.greet", [p.name, p.id], p.locale)
  );
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
