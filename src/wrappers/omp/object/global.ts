import {
  AttachedDataImpl,
  MaterialImpl,
  MaterialTextImpl,
  ObjectPosImpl,
  ObjectRotPosImpl,
} from "../interfaces/Object";

export const GetObjectDrawDistance = (objectid: number): number => {
  return samp.callNativeFloat("GetObjectDrawDistance", "i", objectid);
};

export const GetObjectMoveSpeed = (objectid: number): number => {
  return samp.callNativeFloat("GetObjectMoveSpeed", "i", objectid);
};

export const GetObjectTarget = (objectid: number): ObjectPosImpl => {
  const [fX = 0.0, fY = 0.0, fZ = 0.0]: number[] = samp.callNative(
    "GetObjectTarget",
    "i",
    objectid
  );
  return { fX, fY, fZ };
};

export const GetObjectMovingTargetPos = (objectid: number): ObjectPosImpl => {
  const [fX = 0.0, fY = 0.0, fZ = 0.0]: number[] = samp.callNative(
    "GetObjectMovingTargetPos",
    "i",
    objectid
  );
  return { fX, fY, fZ };
};

export const GetObjectMovingTargetRot = (objectid: number): ObjectPosImpl => {
  const [fX = 0.0, fY = 0.0, fZ = 0.0]: number[] = samp.callNative(
    "GetObjectMovingTargetRot",
    "i",
    objectid
  );
  return { fX, fY, fZ };
};

export const GetObjectAttachedData = (objectid: number): AttachedDataImpl => {
  const [
    attached_vehicleid = 0,
    attached_objectid = 0,
    attached_playerid = 0,
  ]: number[] = samp.callNative("GetObjectAttachedData", "i", objectid);
  return { attached_vehicleid, attached_objectid, attached_playerid };
};

export const GetObjectAttachedOffset = (objectid: number): ObjectRotPosImpl => {
  const [
    fX = 0.0,
    fY = 0.0,
    fZ = 0.0,
    fRotX = 0.0,
    fRotY = 0.0,
    fRotZ = 0.0,
  ]: number[] = samp.callNative("GetObjectAttachedOffset", "i", objectid);
  return { fX, fY, fZ, fRotX, fRotY, fRotZ };
};

export const GetObjectSyncRotation = (objectid: number): number => {
  return samp.callNative("GetObjectSyncRotation", "i", objectid);
};

// Return values: 1 = material, 2 = material tex
export const IsObjectMaterialSlotUsed = (
  objectid: number,
  materialindex: number
) => {
  return samp.callNative(
    "IsObjectMaterialSlotUsed",
    "ii",
    objectid,
    materialindex
  );
};

export const GetObjectMaterial = (
  objectid: number,
  materialindex: number
): MaterialImpl => {
  let [modelid, txdname, texturename, materialcolor]: [
    number,
    string,
    string,
    number | string
  ] = samp.callNative(
    "GetObjectMaterial",
    "iiISiSiI",
    objectid,
    materialindex,
    64,
    64
  );
  materialcolor = materialcolor.toString(16);
  return { modelid, txdname, texturename, materialcolor };
};

export const GetObjectMaterialText = (
  objectid: number,
  materialindex: number
): MaterialTextImpl => {
  let [
    text,
    materialsize,
    fontface,
    fontsize,
    bold,
    fontcolor,
    backcolor,
    textalignment,
  ]: [
    string,
    number,
    string,
    number,
    number,
    number | string,
    number | string,
    number
  ] = samp.callNative(
    "GetObjectMaterialText",
    "iiSiISiIIIII",
    objectid,
    materialindex,
    2048,
    32
  );
  fontcolor = fontcolor.toString(16);
  backcolor = backcolor.toString(16);
  return {
    text,
    materialsize,
    fontface,
    fontsize,
    bold,
    fontcolor,
    backcolor,
    textalignment,
  };
};

export const IsObjectNoCameraCol = (objectid: number): boolean => {
  return Boolean(samp.callNative("IsObjectNoCameraCol", "i", objectid));
};
