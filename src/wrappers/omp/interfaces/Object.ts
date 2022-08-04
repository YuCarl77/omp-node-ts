export interface ObjectPosImpl {
  fX: number;
  fY: number;
  fZ: number;
}

export interface ObjectRotPosImpl extends ObjectPosImpl {
  fRotX: number;
  fRotY: number;
  fRotZ: number;
}
export interface AttachedObjectImpl extends ObjectRotPosImpl {
  modelid: number;
  bone: number;
  fScaleX: number;
  fScaleY: number;
  fScaleZ: number;
  materialcolor1: number;
  materialcolor2: number;
}

export interface MaterialImpl {
  modelid: number;
  txdname: string;
  texturename: string;
  materialcolor: string;
}

export interface MaterialTextImpl {
  text: string;
  materialsize: number;
  fontface: string;
  fontsize: number;
  bold: number;
  fontcolor: string;
  backcolor: string;
  textalignment: number;
}

export interface AttachedDataImpl {
  attached_vehicleid: number;
  attached_objectid?: number;
  attached_playerid: number;
}
