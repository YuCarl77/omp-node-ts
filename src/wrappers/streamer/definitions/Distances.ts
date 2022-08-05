enum StreamerDistances {
  OBJECT_SD = 300.0,
  /**
   *  If STREAMER_OBJECT_DD is set to 0.0, each object's default draw distance (as defined by the game) will be used.
   *  如果STREAMER_OBJECT_DD设置为0.0，则每个物体的绘制距离是游戏定义的默认值。
   */
  OBJECT_DD = 0.0,
  PICKUP_SD = 200.0,
  CP_SD = 200.0,
  RACE_CP_SD = 200.0,
  MAP_ICON_SD = 200.0,
  TEXT_3D_LABEL_SD = 200.0,
  ACTOR_SD = 200.0,
}
export default StreamerDistances;
