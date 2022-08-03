import CmdBus from "@/utils/CmdBus";
import ColorEnum from "@/enums/color";
import { SendClientMessage } from "@/utils/helper";

// 这里也有问题，同时注册上了两个事件 一个是赛车的一个是注册的
CmdBus.on(["r", "reg", "register"], function (...args) {
  SendClientMessage(this, ColorEnum.white, `this is a reg example ${args}`);
});

CmdBus.on(["l", "login"], function (...args) {
  SendClientMessage(this, ColorEnum.white, `this is a login example ${args}`);
});
