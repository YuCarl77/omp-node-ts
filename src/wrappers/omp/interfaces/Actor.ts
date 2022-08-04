export interface ActorSpawnImpl {
  skinid: number;
  fX: number;
  fY: number;
  fZ: number;
  fAngle: number;
}
export interface ActorAnimationImpl {
  animlib: string;
  animname: string;
  fDelta: number;
  loop: number;
  lockx: number;
  locky: number;
  freeze: number;
  time: number;
}
