import { $t } from "@/i18n";
import { BaseGameMode, logger } from "omp-node-lib";

class MyGameMode extends BaseGameMode {
  protected onInit(): void {
    logger.info($t("server.running"));
  }
  protected onExit(): void {
    logger.info("gameMode exit");
  }
  protected onIncomingConnection(
    playerid: number,
    ipAddress: string,
    port: number
  ): number {
    logger.info(`incoming: ${playerid} - ${ipAddress} : ${port}`);
    return 1;
  }
  protected onClientMessage(color: number, text: string): number {
    logger.info(`client message: ${color} - ${text}`);
    return 1;
  }
  protected onRconCommand(cmd: string): number {
    logger.info(`rcon: ${cmd}`);
    return 1;
  }
  protected onRconLoginAttempt(
    ip: string,
    password: string,
    success: boolean
  ): number {
    logger.info(`rcon login attempt: ${ip} ${password} ${success}`);
    return 1;
  }
}

new MyGameMode();
