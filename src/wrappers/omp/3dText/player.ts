import { IAttachedData, IObjectPos } from "../interfaces/Object";

export const IsValidPlayer3DTextLabel = (
  playerid: number,
  id: number
): boolean => {
  return Boolean(
    samp.callNative("IsValidPlayer3DTextLabel", "ii", playerid, id)
  );
};

export const GetPlayer3DTextLabelText = (
  playerid: number,
  id: number
): string => {
  return samp.callNative("GetPlayer3DTextLabelText", "iiSi", playerid, id, 144);
};

export const GetPlayer3DTextLabelColor = (
  playerid: number,
  id: number
): number => {
  return samp.callNative("GetPlayer3DTextLabelColor", "ii", playerid, id);
};

export const GetPlayer3DTextLabelPos = (
  playerid: number,
  id: number
): IObjectPos => {
  const [fX = 0.0, fY = 0.0, fZ = 0.0]: number[] = samp.callNative(
    "GetPlayer3DTextLabelPos",
    "iiFFF",
    playerid,
    id
  );
  return { fX, fY, fZ };
};

export const SetPlayer3DTextLabelDrawDist = (
  playerid: number,
  id: number,
  dist: number
): void => {
  samp.callNative("SetPlayer3DTextLabelDrawDist", "iii", playerid, id, dist);
};

export const GetPlayer3DTextLabelDrawDist = (
  playerid: number,
  id: number
): number => {
  return samp.callNativeFloat(
    "GetPlayer3DTextLabelDrawDist",
    "ii",
    playerid,
    id
  );
};

export const GetPlayer3DTextLabelLOS = (
  playerid: number,
  id: number
): boolean => {
  return Boolean(
    samp.callNative("GetPlayer3DTextLabelLOS", "ii", playerid, id)
  );
};

export const SetPlayer3DTextLabelLOS = (
  playerid: number,
  id: number,
  status: boolean
): void => {
  samp.callNative("SetPlayer3DTextLabelLOS", "iii", playerid, id, status);
};

export const GetPlayer3DTextLabelVirtualW = (
  playerid: number,
  id: number
): number => {
  return samp.callNative("GetPlayer3DTextLabelVirtualW", "ii", playerid, id);
};

export const GetPlayer3DTextLabelAttached = (
  playerid: number,
  id: number
): IAttachedData => {
  const [attached_playerid = 0, attached_vehicleid = 0]: number[] =
    samp.callNative("GetPlayer3DTextLabelAttached", "ii", playerid, id);
  return { attached_playerid, attached_vehicleid };
};
