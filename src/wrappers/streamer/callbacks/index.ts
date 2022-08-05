import ItemTypes from "../definitions/ItemTypes";

export const OnDynamicObjectMoved = (fn: (objectid: number) => void): void => {
  samp.on("OnDynamicObjectMoved", fn);
};

export const OnPlayerEditDynamicObject = (
  fn: (
    playerid: number,
    objectid: number,
    response: number,
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number
  ) => void
): void => {
  samp.on("OnPlayerEditDynamicObject", fn);
};

export const OnPlayerSelectDynamicObject = (
  fn: (
    playerid: number,
    objectid: number,
    modelid: number,
    x: number,
    y: number,
    z: number
  ) => void
): void => {
  samp.on("OnPlayerSelectDynamicObject", fn);
};

// If a return value of 0 is specified, the weapon shot will not be registered.
export const OnPlayerShootDynamicObject = (
  fn: (
    playerid: number,
    weaponid: number,
    objectid: number,
    x: number,
    y: number,
    z: number
  ) => number
): void => {
  samp.on("OnPlayerShootDynamicObject", fn);
};

export const OnPlayerPickUpDynamicPickup = (
  fn: (playerid: number, pickupid: number) => void
): void => {
  samp.on("OnPlayerPickUpDynamicPickup", fn);
};

export const OnPlayerEnterDynamicCP = (
  fn: (playerid: number, checkpointid: number) => void
): void => {
  samp.on("OnPlayerEnterDynamicCP", fn);
};

export const OnPlayerLeaveDynamicCP = (
  fn: (playerid: number, checkpointid: number) => void
): void => {
  samp.on("OnPlayerLeaveDynamicCP", fn);
};

export const OnPlayerEnterDynamicRaceCP = (
  fn: (playerid: number, checkpointid: number) => void
): void => {
  samp.on("OnPlayerEnterDynamicRaceCP", fn);
};

export const OnPlayerLeaveDynamicRaceCP = (
  fn: (playerid: number, checkpointid: number) => void
): void => {
  samp.on("OnPlayerLeaveDynamicRaceCP", fn);
};

// OnPlayerEnterDynamicArea also called when the player is not spawned (example: spectating).
export const OnPlayerEnterDynamicArea = (
  fn: (playerid: number, areaid: number) => void
): void => {
  samp.on("OnPlayerEnterDynamicArea", fn);
};

// OnPlayerLeaveDynamicArea also called when the player is not spawned (example: spectating).
export const OnPlayerLeaveDynamicArea = (
  fn: (playerid: number, areaid: number) => void
): void => {
  samp.on("OnPlayerLeaveDynamicArea", fn);
};

export const OnPlayerGiveDamageDynamicActor = (
  fn: (
    playerid: number,
    actorid: number,
    amount: number,
    weaponid: number,
    bodypart: number
  ) => void
): void => {
  samp.on("OnPlayerGiveDamageDynamicActor", fn);
};

export const OnDynamicActorStreamIn = (
  fn: (actorid: number, forplayerid: number) => void
): void => {
  samp.on("OnDynamicActorStreamIn", fn);
};

export const OnDynamicActorStreamOut = (
  fn: (actorid: number, forplayerid: number) => void
): void => {
  samp.on("OnDynamicActorStreamOut", fn);
};

// Streamer_OnItemStreamIn must be enabled using Streamer_ToggleItemCallbacks.
export const Streamer_OnItemStreamIn = (
  fn: (type: ItemTypes, id: number, forplayerid: number) => void
): void => {
  samp.on("Streamer_OnItemStreamIn", fn);
};

// Streamer_OnItemStreamOut must be enabled using Streamer_ToggleItemCallbacks.
export const Streamer_OnItemStreamOut = (
  fn: (type: ItemTypes, id: number, forplayerid: number) => void
): void => {
  samp.on("Streamer_OnItemStreamOut", fn);
};

// Streamer_OnPluginError must be enabled using Streamer_ToggleErrorCallback.
export const Streamer_OnPluginError = (fn: (error: string) => void): void => {
  samp.on("Streamer_OnPluginError", fn);
};
