/*
    A polyfill that makes the string arguments in the existing sa:mp callback function return to the samp-node event as byte arrays.
	Author: YuCarl77
*/

#include <a_samp>
#include <samp-node>

main(){}

/*
	See https://open.mp/docs/tutorials/stringmanipulation #Length limits.
	The maximum number is 4096. no need to worry about performance issues.
*/
stock getByteLength(text[]) {
	new i;
	for(i = 0; i < 4096; i++) {
	    if(text[i] == 0) break;
	}
	return i;
}

forward OnClientMessage(color, text[]);
public OnClientMessage(color, text[])
{
	SAMPNode_CallEvent("OnClientMessageI18n", color, text, getByteLength(text));
}

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
	SAMPNode_CallEvent("OnDialogResponseI18n", playerid, dialogid, response, listitem, inputtext, getByteLength(inputtext));
	return 1;
}

forward OnNPCDisconnect(reason[]);
public OnNPCDisconnect(reason[])
{
	SAMPNode_CallEvent("OnNPCDisconnectI18n", reason, getByteLength(reason));
}

public OnPlayerCommandText(playerid, cmdtext[])
{
	SAMPNode_CallEvent("OnPlayerCommandTextI18n", playerid, cmdtext, getByteLength(cmdtext));
	return 1;
}

public OnPlayerText(playerid, text[])
{
	SAMPNode_CallEvent("OnPlayerTextI18n", playerid, text, getByteLength(text));
	return 0;
}

public OnRconCommand(cmd[])
{
	SAMPNode_CallEvent("OnRconCommandI18n", cmd, getByteLength(cmd));
	return 1;
}

public OnRconLoginAttempt(ip[], password[], success)
{
	SAMPNode_CallEvent("OnRconLoginAttemptI18n", ip, getByteLength(ip), password, getByteLength(password), success);
	return 1;
}

