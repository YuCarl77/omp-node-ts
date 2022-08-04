import { IBounds } from "./interfaces/Bounds";
import { ICheckPoint, IRaceCheckPoint } from "./interfaces/CheckPoint";
import { IAttachedObject } from "./interfaces/Object";
import { IOffsets } from "./interfaces/Offsets";
import { IPlayerClass } from "./interfaces/PlayerClass";
import { IQuat } from "./interfaces/Quat";

export const TogglePlayerWidescreen = (
  playerid: number,
  set: boolean
): void => {
  samp.callNative("TogglePlayerWidescreen", "ii", playerid, set);
};

export const IsPlayerWidescreenToggled = (playerid: number): boolean => {
  return Boolean(samp.callNative("IsPlayerWidescreenToggled", "i", playerid));
};

export const GetSpawnInfo = (playerid: number): IPlayerClass => {
  const [
    teamid,
    modelid = 0,
    spawn_x = 0.0,
    spawn_y = 0.0,
    spawn_z = 0.0,
    z_angle = 0.0,
    weapon1 = 0,
    weapon1_ammo = 0,
    weapon2 = 0,
    weapon2_ammo = 0,
    weapon3 = 0,
    weapon3_ammo = 0,
  ]: number[] = samp.callNative("GetSpawnInfo", "iIIFFFFIIIIII", playerid);
  return {
    teamid,
    modelid,
    spawn_x,
    spawn_y,
    spawn_z,
    z_angle,
    weapon1,
    weapon1_ammo,
    weapon2,
    weapon2_ammo,
    weapon3,
    weapon3_ammo,
  };
};

export const GetPlayerSkillLevel = (
  playerid: number,
  skill: number
): number => {
  return samp.callNative("GetPlayerSkillLevel", "ii", playerid, skill);
};

export const IsPlayerCheckpointActive = (playerid: number): boolean => {
  return Boolean(samp.callNative("IsPlayerCheckpointActive", "i", playerid));
};

export const GetPlayerCheckpoint = (playerid: number): ICheckPoint => {
  const [fX = 0.0, fY = 0.0, fZ = 0.0, fSize = 0.0]: number[] = samp.callNative(
    "GetPlayerCheckpoint",
    "iFFFF",
    playerid
  );
  return { fX, fY, fZ, fSize };
};

export const IsPlayerRaceCheckpointActive = (playerid: number): boolean => {
  return Boolean(
    samp.callNative("IsPlayerRaceCheckpointActive", "i", playerid)
  );
};

export const GetPlayerRaceCheckpoint = (playerid: number): IRaceCheckPoint => {
  const [
    fX = 0.0,
    fY = 0.0,
    fZ = 0.0,
    fNextX = 0.0,
    fNextY = 0.0,
    fNextZ = 0.0,
    fSize = 0.0,
  ]: number[] = samp.callNative(
    "GetPlayerRaceCheckpoint",
    "iFFFFFFF",
    playerid
  );
  return { fX, fY, fZ, fNextX, fNextY, fNextZ, fSize };
};

export const GetPlayerWorldBounds = (playerid: number): IBounds => {
  const [x_max = 0.0, x_min = 0.0, y_max = 0.0, y_min = 0.0]: number[] =
    samp.callNative("GetPlayerWorldBounds", "iFFFF", playerid);
  return { x_max, x_min, y_max, y_min };
};

export const IsPlayerInModShop = (playerid: number): boolean => {
  return Boolean(samp.callNative("IsPlayerInModShop", "i", playerid));
};

export const GetPlayerSirenState = (playerid: number): number => {
  return samp.callNative("GetPlayerSirenState", "i", playerid);
};

export const GetPlayerLandingGearState = (playerid: number): number => {
  return samp.callNative("GetPlayerLandingGearState", "i", playerid);
};

export const GetPlayerHydraReactorAngle = (playerid: number): number => {
  return samp.callNative("GetPlayerHydraReactorAngle", "i", playerid);
};

export const GetPlayerTrainSpeed = (playerid: number): number => {
  return samp.callNativeFloat("GetPlayerTrainSpeed", "i", playerid);
};

export const GetPlayerZAim = (playerid: number): number => {
  return samp.callNativeFloat("GetPlayerZAim", "i", playerid);
};

export const GetPlayerSurfingOffsets = (playerid: number): IOffsets => {
  const [fOffsetX = 0.0, fOffsetY = 0.0, fOffsetZ = 0.0]: number[] =
    samp.callNative("GetPlayerSurfingOffsets", "iFFF", playerid);
  return { fOffsetX, fOffsetY, fOffsetZ };
};

export const GetPlayerRotationQuat = (playerid: number): IQuat => {
  const [w = 0.0, x = 0.0, y = 0.0, z = 0.0]: number[] = samp.callNative(
    "GetPlayerRotationQuat",
    "iFFFF",
    playerid
  );
  return { w, x, y, z };
};

export const GetPlayerDialogID = (playerid: number): number => {
  return samp.callNative("GetPlayerDialogID", "i", playerid);
};

export const GetPlayerSpectateID = (playerid: number): number => {
  return samp.callNative("GetPlayerSpectateID", "i", playerid);
};

export const GetPlayerSpectateType = (playerid: number): number => {
  return samp.callNative("GetPlayerSpectateType", "i", playerid);
};

export const GetPlayerRawIp = (playerid: number): string => {
  return samp.callNative("GetPlayerRawIp", "i", playerid);
};

export const SetPlayerGravity = (playerid: number, gravity: number): number => {
  return samp.callNative("SetPlayerGravity", "if", playerid, gravity);
};

export const GetPlayerGravity = (playerid: number): number => {
  return samp.callNativeFloat("GetPlayerGravity", "i", playerid);
};

export const SetPlayerAdmin = (playerid: number, admin: boolean): number => {
  return samp.callNative("SetPlayerAdmin", "ii", playerid, admin);
};

export const IsPlayerSpawned = (playerid: number): boolean => {
  return Boolean(samp.callNative("IsPlayerSpawned", "i", playerid));
};

export const IsPlayerControllable = (playerid: number): boolean => {
  return Boolean(samp.callNative("IsPlayerControllable", "i", playerid));
};

export const IsPlayerCameraTargetEnabled = (playerid: number): boolean => {
  return Boolean(samp.callNative("IsPlayerCameraTargetEnabled", "i", playerid));
};

export const TogglePlayerGhostMode = (
  playerid: number,
  toggle: boolean
): void => {
  samp.callNative("TogglePlayerGhostMode", "ii", playerid, toggle);
};

export const GetPlayerGhostMode = (playerid: number): boolean => {
  return Boolean(samp.callNative("GetPlayerGhostMode", "i", playerid));
};

export const GetPlayerBuildingsRemoved = (playerid: number): number => {
  return samp.callNative("GetPlayerBuildingsRemoved", "i", playerid);
};

export const GetPlayerAttachedObject = (
  playerid: number,
  index: number
): IAttachedObject => {
  const [
    modelid = 0,
    bone = 0,
    fX = 0.0,
    fY = 0.0,
    fZ = 0.0,
    fRotX = 0.0,
    fRotY = 0.0,
    fRotZ = 0.0,
    fScaleX = 0.0,
    fScaleY = 0.0,
    fScaleZ = 0.0,
    materialcolor1 = 0,
    materialcolor2 = 0,
  ]: number[] = samp.callNative(
    "GetPlayerAttachedObject",
    "iiIIFFFFFFFFFII",
    playerid,
    index
  );
  return {
    modelid,
    bone,
    fX,
    fY,
    fZ,
    fRotX,
    fRotY,
    fRotZ,
    fScaleX,
    fScaleY,
    fScaleZ,
    materialcolor1,
    materialcolor2,
  };
};

export const SendClientMessagef = (
  playerid: number,
  color: number,
  message: string,
  ...args: Array<any>
): void => {
  samp.callNative("SendClientMessagef", "iisa", playerid, color, message, args);
};

export const GameTextForPlayerf = (
  playerid: number,
  displaytime: number,
  style: number,
  message: string,
  ...args: Array<any>
): void => {
  samp.callNative(
    "GameTextForPlayerf",
    "iiisa",
    playerid,
    displaytime,
    style,
    message,
    args
  );
};

export const SendPlayerMessageToPlayerf = (
  playerid: number,
  senderid: number,
  message: string,
  ...args: Array<any>
): void => {
  samp.callNative(
    "SendPlayerMessageToPlayerf",
    "iisa",
    playerid,
    senderid,
    message,
    args
  );
};

export const RemovePlayerWeapon = (
  playerid: number,
  weaponid: number
): void => {
  samp.callNative("RemovePlayerWeapon", "ii", playerid, weaponid);
};
