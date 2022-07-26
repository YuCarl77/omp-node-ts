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
	return SAMPNode_CallEvent("OnClientMessageI18n", color, text, getByteLength(text));
}

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
	return SAMPNode_CallEvent("OnDialogResponseI18n", playerid, dialogid, response, listitem, inputtext, getByteLength(inputtext));
}

public OnIncomingConnection(playerid, ip_address[], port)
{
    return SAMPNode_CallEvent("OnIncomingConnectionI18n", playerid, ip_address, getByteLength(ip_address), port);
}

forward OnNPCDisconnect(reason[]);
public OnNPCDisconnect(reason[])
{
    return SAMPNode_CallEvent("OnNPCDisconnectI18n", reason, getByteLength(reason));
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    return SAMPNode_CallEvent("OnPlayerCommandTextI18n", playerid, cmdtext, getByteLength(cmdtext));
}

public OnPlayerText(playerid, text[])
{
    return SAMPNode_CallEvent("OnPlayerTextI18n", playerid, text, getByteLength(text));
}

public OnRconCommand(cmd[])
{
	return SAMPNode_CallEvent("OnRconCommandI18n", cmd, getByteLength(cmd));
}

public OnRconLoginAttempt(ip[], password[], success)
{
    return SAMPNode_CallEvent("OnRconLoginAttemptI18n", ip, getByteLength(ip), password, getByteLength(password), success);
}

