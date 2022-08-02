/*
    A polyfill that makes the string arguments in the existing sa:mp callback function return to the samp-node event as byte arrays.
	Author: YuCarl77
*/

#include <a_samp>
#include <omp>
#include <samp-node>

main() {}

public OnGameModeInit() {
    // In utf8, different national languages take up different numbers of bytes, but no matter how many bytes they take up, a byte always takes up 8 bits of binary, i.e., a decimal integer up to 255.
    // Most multibyte nicknames are supported to connect to the server, but not for bytes with a decimal size of 233 ～ 255, because the player's spawn will crash after the call.
    for (new i = 0; i <= 232; i++) {
        AllowNickNameCharacter(i, true);
    }
    return 1;
}

stock getByteLength(string[]) {
    new len = 0;
    /* get character from pack */
    if (ispacked(string)) {
        while (string { len } != EOS) {
            ++len;
        }
        return len;
    }
    /* get cell */
    while (string[len] != EOS) {
        ++len;
    }
    return len;
}

forward OnClientMessage(color, text[]);
public OnClientMessage(color, text[]) {
    SAMPNode_CallEvent("OnClientMessageI18n", color, text, getByteLength(text));
}

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[]) {
    SAMPNode_CallEvent("OnDialogResponseI18n", playerid, dialogid, response, listitem, inputtext, getByteLength(inputtext));
    return 1;
}

forward OnNPCDisconnect(reason[]);
public OnNPCDisconnect(reason[]) {
    SAMPNode_CallEvent("OnNPCDisconnectI18n", reason, getByteLength(reason));
}

public OnPlayerCommandText(playerid, cmdtext[]) {
    SAMPNode_CallEvent("OnPlayerCommandTextI18n", playerid, cmdtext, getByteLength(cmdtext));
    return 1;
}

public OnPlayerText(playerid, text[]) {
    SAMPNode_CallEvent("OnPlayerTextI18n", playerid, text, getByteLength(text));
    return 0;
}

public OnRconCommand(cmd[]) {
    SAMPNode_CallEvent("OnRconCommandI18n", cmd, getByteLength(cmd));
    return 1;
}

public OnRconLoginAttempt(ip[], password[], success) {
    SAMPNode_CallEvent("OnRconLoginAttemptI18n", ip, getByteLength(ip), password, getByteLength(password), success);
    return 1;
}