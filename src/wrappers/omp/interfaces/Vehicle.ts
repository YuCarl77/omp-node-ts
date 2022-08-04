export interface VehColorImpl {
  color1: number;
  color2: number;
}

export interface VehSpawnInfoImpl extends VehColorImpl {
  fX: number;
  fY: number;
  fZ: number;
  fRot: number;
}

export interface VehMatrixImpl {
  rightX: number;
  rightY: number;
  rightZ: number;
  upX: number;
  upY: number;
  upZ: number;
  atX: number;
  atY: number;
  atZ: number;
}
