/**
 * Notes:
 * 1. It is not recommended to use a high streaming distance for every item. This can drastically impact performance because it leads to more items being checked on each update. If an item's streaming distance exceeds that of the cell distance (600.0 by default), it also does not benefit from spatial indexing, which can lead to even worse performance. Only set high streaming distances for items which need to be visible from very far away (global map icons, for example).
 *
 * 2. Adding too many virtual worlds and interiors to items can lead to increased memory usage and decreased performance. Specifying -1 (all virtual worlds and interiors) actually ensures the best performance, because it eliminates the need to do a lookup when that item is checked on each update. Note that this does not apply to players since only a finite amount can be added.
 *
 * 3. The priority parameter can be any number. It is set to 0 by default. Items with higher priorities will always be streamed before items with lower priorities.
 *
 * 4. Specifying a negative streaming distance (setting streamdistance to -1.0) will make an item static. All distance checks are omitted on static items, meaning they will always be visible, and they will therefore take priority over non-static items. See Streamer_ToggleItemStatic for easily toggling this setting on existing items.
 *
 * 要点:
 * 1. 不建议对每一项都使用高的流距离。这可能会极大地影响性能，因为它导致每次更新都要检查更多的项。如果一个项的流距离超过了单元格距离（默认为600.0），它也不能从空间索引中受益，这可能导致更差的性能。只有那些需要在很远的地方就能看到的项（例如全局地图图标），才能设置较高的流距离。
 *
 * 2. 为项添加太多的虚拟世界和内部空间会导致内存使用量增加和性能下降。指定-1（所有的虚拟世界和内部空间）实际上确保了最佳性能，因为它省去了流每次更新时，对项进行查找的过程。请注意，这不适用于玩家项，因为可创建的玩家项的数量是有限的。
 *
 * 3. 优先级参数可以是任何数值。默认值为0。具有较高优先级的项将始终在较低优先级的项之前进行流处理。
 *
 * 4. 指定负的流距离(将StreamDistance设置为-1.0)将使项处于静态状态。静态项会省略所有的距离检查，这意味着它们将始终可见，因此它们将优先于非静态项。参考Streamer_ToggleItemStatic函数，可以轻松切换现有项上的此设置。
 */

export * from "./3DTextLabels";
export * from "./Actors";
export * from "./Areas";
export * from "./Checkpoints";
export * from "./DataManipulation";
export * from "./Extended";
export * from "./MapIcons";
export * from "./Miscellaneous";
export * from "./Objects";
export * from "./Pickups";
export * from "./RaceCheckpoints";
export * from "./Settings";
export * from "./Updates";
