import StreamerDistances from "../definitions/Distances";

export const CreateDynamicPickup = (
  modelid: number,
  type: number,
  x: number,
  y: number,
  z: number,
  worldid: number = -1,
  interiorid: number = -1,
  playerid: number = -1,
  streamdistance: number = StreamerDistances.PICKUP_SD,
  areaid: number = -1,
  priority: number = 0
): number => {
  return samp.callNative(
    "CreateDynamicPickup",
    "iifffiiifii",
    modelid,
    type,
    x,
    y,
    z,
    worldid,
    interiorid,
    playerid,
    streamdistance,
    areaid,
    priority
  );
};

export const DestroyDynamicPickup = (pickupid: number): number => {
  return samp.callNative("DestroyDynamicPickup", "i", pickupid);
};

export const IsValidDynamicPickup = (pickupid: number): boolean => {
  return Boolean(samp.callNative("IsValidDynamicPickup", "i", pickupid));
};
