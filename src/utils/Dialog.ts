import { DIALOG_STYLE, SampPlayer } from "samp-node-lib";

interface DialogImpl {
  style: DIALOG_STYLE;
  caption: string;
  info: string;
  button1: string;
  button2: string;
}

type DialogResponse = Promise<{
  response: number;
  listitem: number;
  inputtext: string;
}> | null;

/* You don't need to define the dialog id, 
  but you need to pay attention to the fact that you shouldn't repeatedly new the dialog in the function, 
  instead you should call the open method.
  
  If you need to change the value dynamically, you should do it by setter method
*/

class Dialog {
  private id: number;
  private static CREATED_ID: number = -1;
  private static MAX_DIALOGID: number = 32767;
  private dialog: DialogImpl;

  constructor(
    dialog: DialogImpl = {
      style: DIALOG_STYLE.MSGBOX,
      caption: "",
      info: "",
      button1: "",
      button2: "",
    }
  ) {
    if (Dialog.CREATED_ID < Dialog.MAX_DIALOGID) {
      Dialog.CREATED_ID++;
    } else {
      console.log("[Dialog]: The maximum number of dialogs is reached.");
    }
    this.dialog = dialog;
    this.id = Dialog.CREATED_ID;
  }

  // #region
  public get style(): DIALOG_STYLE {
    return this.dialog.style;
  }
  public set style(v: DIALOG_STYLE) {
    this.dialog.style = v;
  }

  public get caption(): string {
    return this.dialog.caption;
  }
  public set caption(v: string) {
    this.dialog.caption = v;
  }

  public get info(): string {
    return this.dialog.info;
  }
  public set info(v: string) {
    this.dialog.info = v;
  }

  public get button1(): string {
    return this.dialog.button1;
  }
  public set button1(v: string) {
    this.dialog.button1 = v;
  }

  public get button2(): string {
    return this.dialog.button2;
  }
  public set button2(v: string) {
    this.dialog.button2 = v;
  }
  //#endregion

  public open(player: SampPlayer): DialogResponse {
    const { style, caption, info, button1, button2 } = this.dialog;
    return player.ShowDialog(this.id, style, caption, info, button1, button2);
  }

  public static close(player: SampPlayer) {
    player.ShowDialog(-1, DIALOG_STYLE.MSGBOX, " ", " ", " ", "");
  }
}

export default Dialog;
