enum Distances {
  STREAMER_OBJECT_SD = 300.0,
  /**
   *  If STREAMER_OBJECT_DD is set to 0.0, each object's default draw distance (as defined by the game) will be used.
   *  如果STREAMER_OBJECT_DD设置为0.0，则每个物体的绘制距离是游戏定义的默认值。
   */
  STREAMER_OBJECT_DD = 0.0,
  STREAMER_PICKUP_SD = 200.0,
  STREAMER_CP_SD = 200.0,
  STREAMER_RACE_CP_SD = 200.0,
  STREAMER_MAP_ICON_SD = 200.0,
  STREAMER_3D_TEXT_LABEL_SD = 200.0,
  STREAMER_ACTOR_SD = 200.0,
}
export default Distances;
