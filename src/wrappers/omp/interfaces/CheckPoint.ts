export interface CheckPointImpl {
  fX: number;
  fY: number;
  fZ: number;
  fSize: number;
}

export interface RaceCheckPointImpl extends CheckPointImpl {
  fNextX: number;
  fNextY: number;
  fNextZ: number;
}
