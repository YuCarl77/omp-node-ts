export interface AttachedObjectImpl {
  modelid: number;
  bone: number;
  fX: number;
  fY: number;
  fZ: number;
  fRotX: number;
  fRotY: number;
  fRotZ: number;
  fSacleX: number;
  fScaleY: number;
  fScaleZ: number;
  materialcolor1: number;
  materialcolor2: number;
}

export type AttachedObjectTuple = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];
