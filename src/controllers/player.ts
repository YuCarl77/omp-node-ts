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

// see https://github.com/AmyrAhmady/samp-node/wiki/Events#sampnode_callevent.
// in short, when you write the flag a, you must add I after it, but this I will actually be ignored.
samp.registerEvent("OnPlayerTextI18n", "iai");
samp.on("OnPlayerTextI18n", (player: number, buffer: number[]) => {
  // get the player input text
  // and you can decode with the player's charset;
  console.log(player, buffer);
});
