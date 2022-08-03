export interface CheckPointImpl {
  fX: number;
  fY: number;
  fZ: number;
  fSize: number;
}

export type CheckPointTuple = [number, number, number, number];

export interface RaceCheckPointImpl extends CheckPointImpl {
  fNextX: number;
  fNextY: number;
  fNextZ: number;
}

export type RaceCheckPointTuple = [
  number,
  number,
  number,
  number,
  number,
  number,
  number
];
