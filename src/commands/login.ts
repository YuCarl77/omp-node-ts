import CmdBus from "@/utils/CmdBus";
import ColorEnum from "@/enums/color";
import { SendClientMessage } from "@/utils/helper";

CmdBus.on(["r", "reg", "register"], function (...args) {
  SendClientMessage(this, ColorEnum.white, `this is a reg example ${args}`);
});

CmdBus.on(["l", "login"], function (...args) {
  SendClientMessage(this, ColorEnum.white, `this is a login example ${args}`);
});
