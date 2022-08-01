export const ToggleChatTextReplacement = (toggle: boolean): void => {
  return samp.callNative("ToggleChatTextReplacement", "i", toggle);
};

export const ChatTextReplacementToggled = (): boolean => {
  return Boolean(samp.callNative("ChatTextReplacementToggled", ""));
};
