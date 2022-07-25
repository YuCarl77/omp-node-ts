import CmdBus from "@/utils/CmdBus";
import Color from "@/enums/color";

// 这里也有问题，同时注册上了两个事件 一个是赛车的一个是注册的
CmdBus.on(["r", "reg", "register"], function (...args) {
  this.SendClientMessage(Color.white, `${this}, ${args}`);
});

CmdBus.on(["l", "login"], function (...args) {
  this.SendClientMessage(Color.white, `${this}, ${args}`);
});
