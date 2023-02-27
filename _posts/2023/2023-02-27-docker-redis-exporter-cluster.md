---

# layout: post

author: luke_chi

title:  "Docker + Redis Exporter: cluster + Prometheus"
date:   2023-02-27 00:00:00 +0800

categories: []
tags: []
---

# Docker + Redis Exporter: Cluster

## Prometheus config

in case we have 3 redis cluster nodes, each node has 3 shards, so we have 9 redis instances. All master nodes are at port 7000.

```yaml
  - job_name: 'pg-redis-mcd-exporter'
    static_configs:
      - targets:
        - redis://10.100.10.101:7000
        - redis://10.100.10.101:7001
        - redis://10.100.10.101:7002
        - redis://10.100.10.102:7000
        - redis://10.100.10.102:7001
        - redis://10.100.10.102:7002
        - redis://10.100.10.103:7000
        - redis://10.100.10.103:7001
        - redis://10.100.10.103:7002
    metrics_path: /scrape 
    relabel_configs: 
      - source_labels: [__address__] 
        target_label: __param_target 
      - source_labels: [__param_target] 
        target_label: instance 
      - target_label: __address__ 
        replacement: 192.168.0.166:9121
```
