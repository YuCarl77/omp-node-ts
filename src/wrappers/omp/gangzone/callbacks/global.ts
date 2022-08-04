import { GangZoneCb } from "../../interfaces/GangZone";

export const OnPlayerEnterGangZone = (fn: GangZoneCb) => {
  samp.on("OnPlayerEnterGangZone", fn);
};
export const OnPlayerLeaveGangZone = (fn: GangZoneCb) => {
  samp.on("OnPlayerLeaveGangZone", fn);
};
export const OnPlayerClickGangZone = (fn: GangZoneCb) => {
  samp.on("OnPlayerClickGangZone", fn);
};
