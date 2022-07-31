export const ClearBanList = (): void => {
  return samp.callNative("ClearBanList", "");
};

export const IsBanned = (ipaddress: string): boolean => {
  return samp.callNative("IsBanned", "s", ipaddress);
};

export const IsValidNickName = (name: string): boolean => {
  return samp.callNative("IsValidNickName", "s", name);
};

export const AllowNickNameCharacter = (byte: number, allow: boolean): void => {
  return samp.callNative("AllowNickNameCharacter", "ii", byte, allow);
};

export const IsNickNameCharacterAllowed = (byte: number): boolean => {
  return samp.callNative("IsNickNameCharacterAllowed", "i", byte);
};

export const AddServerRule = (name: string, value: string): boolean => {
  return samp.callNative("AddServerRule", "ss", name, value);
};

export const SetServerRule = (name: string, value: string): boolean => {
  return samp.callNative("SetServerRule", "ss", name, value);
};

export const IsValidServerRule = (name: string): boolean => {
  return samp.callNative("IsValidServerRule", "s", name);
};

export const RemoveServerRule = (name: string): boolean => {
  return samp.callNative("RemoveServerRule", "s", name);
};

export const SendClientMessageToAllf = (
  color: number,
  message: string,
  ...args: Array<any>
): void => {
  return samp.callNative(
    "SendClientMessageToAllf",
    "isv",
    color,
    message,
    args
  );
};

export const GameTextForAllf = (
  color: number,
  displaytime: number,
  style: number,
  message: string,
  ...args: Array<any>
): void => {
  return samp.callNative(
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
  return samp.callNative(
    "SendPlayerMessageToAllf",
    "isv",
    senderid,
    message,
    args
  );
};

export const SendRconCommandf = (
  command: string,
  ...args: Array<any>
): void => {
  return samp.callNative("SendRconCommandf", "sv", command, args);
};

export const GetRunningTimers = (): number => {
  return samp.callNative("GetRunningTimers", "");
};
