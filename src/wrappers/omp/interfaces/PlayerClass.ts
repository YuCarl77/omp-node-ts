export interface PlayerClassImpl {
  teamid: number;
  modelid: number;
  spawn_x: number;
  spawn_y: number;
  spawn_z: number;
  z_angle: number;
  weapon1: number;
  weapon1_ammo: number;
  weapon2: number;
  weapon2_ammo: number;
  weapon3: number;
  weapon3_ammo: number;
}

export type PlayerClassTuple = [
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
