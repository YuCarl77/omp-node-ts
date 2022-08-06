import StreamerDistances from "../definitions/Distances";

export const CreateDynamic3DTextLabel = (
  text: string,
  color: number,
  x: number,
  y: number,
  z: number,
  drawdistance: number,
  attachedplayer: number = 0xffff,
  attachedvehicle: number = 0xffff,
  testlos: boolean = false,
  worldid: number = -1,
  interiorid: number = -1,
  playerid: number = -1,
  streamdistance: number = StreamerDistances.TEXT_3D_LABEL_SD,
  areaid: number = -1,
  priority: number = 0
): number => {
  return samp.callNative(
    "CreateDynamic3DTextLabel",
    "siffffiiiiiifii",
    text,
    color,
    x,
    y,
    z,
    drawdistance,
    attachedplayer,
    attachedvehicle,
    testlos,
    worldid,
    interiorid,
    playerid,
    streamdistance,
    areaid,
    priority
  );
};

export const DestroyDynamic3DTextLabel = (id: number): number => {
  return samp.callNative("DestroyDynamic3DTextLabel", "i", id);
};

export const IsValidDynamic3DTextLabel = (id: number): boolean => {
  return Boolean(samp.callNative("IsValidDynamic3DTextLabel", "i", id));
};

export const GetDynamic3DTextLabelText = (id: number): string => {
  return samp.callNative("GetDynamic3DTextLabelText", "iSi", id, 1024);
};

export const UpdateDynamic3DTextLabelText = (
  id: number,
  color: number,
  text: string
): number => {
  return samp.callNative(
    "UpdateDynamic3DTextLabelText",
    "iis",
    id,
    color,
    text
  );
};
