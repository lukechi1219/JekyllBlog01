---

# layout: post

author: luke_chi

title:  "Redisson Notes"
date:   2022-10-06 00:00:00 +0800

categories: []
tags: [redisson]
---

- redisson中如何使用分布式集合
  - https://m.yisu.com/zixun/595395.html
  - 2021-07-30 14:46:48

- Redisson 的分布式的 RMapCache Java对象在基于RMap的前提下实现了针对单个元素的淘汰机制。同时仍然保留了元素的插入顺序。
- 目前的Redis自身并不支持哈希（Hash）当中的元素淘汰，因此所有过期元素都是通过org.redisson.EvictionScheduler实例来实现定期清理的。
- 为了保证资源的有效利用，每次运行最多清理100个过期元素。
- 任务的启动时间将根据上次实际清理数量自动调整，间隔时间趋于1秒到2小时之间。比如该次清理时删除了100条元素，那么下次执行清理的时间将在1秒以后（最小间隔时间）。一旦该次清理数量少于上次清理数量，时间间隔将增加1.5倍。
- .
- LocalCachedMapOptions options = LocalCachedMapOptions.defaults()
  // 淘汰机制有 LFU, LRU 和 NONE 这几种算法策略可供选择
-

---

- The most important Redis data structures you must understand
  - https://medium.com/analytics-vidhya/the-most-important-redis-data-structures-you-must-understand-2e95b5cf2bce
  - Dec 18, 2020

RMap 还保持了元素的插入顺序 ?



