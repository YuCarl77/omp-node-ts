import { ColorEnum } from "@/enums/color";
import { CmdBus } from "omp-node-lib";

CmdBus.on(["r", "reg", "register"], function (...args) {
  this.sendClientMessage(ColorEnum.White, `this is a reg example ${args}`);
});

CmdBus.on(["l", "login"], function (...args) {
  this.sendClientMessage(ColorEnum.White, `this is a login example ${args}`);
});
