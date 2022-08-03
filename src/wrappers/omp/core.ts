export const ClearBanList = (): void => {
  samp.callNative("ClearBanList", "");
};

export const IsBanned = (ipaddress: string): boolean => {
  return Boolean(samp.callNative("IsBanned", "s", ipaddress));
};

export const IsValidNickName = (name: string): boolean => {
  return Boolean(samp.callNative("IsValidNickName", "s", name));
};

export const AllowNickNameCharacter = (byte: number, allow: boolean): void => {
  samp.callNative("AllowNickNameCharacter", "ii", byte, allow);
};

export const IsNickNameCharacterAllowed = (byte: number): boolean => {
  return Boolean(samp.callNative("IsNickNameCharacterAllowed", "i", byte));
};

export const AddServerRule = (name: string, value: string): boolean => {
  return Boolean(samp.callNative("AddServerRule", "ss", name, value));
};

export const SetServerRule = (name: string, value: string): boolean => {
  return Boolean(samp.callNative("SetServerRule", "ss", name, value));
};

export const IsValidServerRule = (name: string): boolean => {
  return Boolean(samp.callNative("IsValidServerRule", "s", name));
};

export const RemoveServerRule = (name: string): boolean => {
  return Boolean(samp.callNative("RemoveServerRule", "s", name));
};

export const SendClientMessageToAllf = (
  color: number,
  message: string,
  ...args: Array<any>
): void => {
  samp.callNative("SendClientMessageToAllf", "isv", color, message, args);
};

export const GameTextForAllf = (
  color: number,
  displaytime: number,
  style: number,
  message: string,
  ...args: Array<any>
): void => {
  samp.callNative(
    "GameTextForAllf",
    "iiisv",
    color,
    displaytime,
    style,
    message,
    args
  );
};

export const SendPlayerMessageToAllf = (
  senderid: number,
  message: string,
  ...args: Array<any>
): void => {
  samp.callNative("SendPlayerMessageToAllf", "isv", senderid, message, args);
};

export const SendRconCommandf = (
  command: string,
  ...args: Array<any>
): void => {
  samp.callNative("SendRconCommandf", "sv", command, args);
};

export const GetRunningTimers = (): number => {
  return samp.callNative("GetRunningTimers", "");
};
