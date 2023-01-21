---

# layout: post

author: luke_chi

title:  "Docker Prometheus Grafana"
date:   2023-01-21 00:00:00 +0800

categories: []
tags: []
---

https://hub.docker.com/r/prom/prometheus

docker run --name prometheus -p 9090:9090 -v /Users/luke/prometheus/conf/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus --storage.tsdb.retention.time=1d --config.file=/etc/prometheus/prometheus.yml

- --storage.tsdb.retention.time=1d
  - 只保留一天資料
  - https://crashlaker.github.io/monitoring/2020/05/03/increase_prometheus_storage_retention_time.html
  - .
- .

---

https://hub.docker.com/r/grafana/grafana

docker run -d --name=grafana -p 3000:3000 grafana/grafana

- jvm
  - https://grafana.com/grafana/dashboards/3066-jvm/
  - https://grafana.com/grafana/dashboards/8563-jvm-dashboard/
  - https://grafana.com/grafana/dashboards/14359-jvm-metrics/
  - .
- linux node exporter
  - https://grafana.com/grafana/dashboards/11074-node-exporter-for-prometheus-dashboard-en-v20201010/
  - https://grafana.com/grafana/dashboards/11623-1-node-exporter-for-prometheus-dashboard-english-version-update-1102/
  - https://grafana.com/grafana/dashboards/15172-node-exporter-for-prometheus-dashboard-based-on-11074/
  - .
- .

---

# prometheus.yml

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: tomcat
    static_configs:
      - targets: ['localhost:9115']
  - job_name: node
    static_configs:
      - targets: ['localhost:9100']
```

---

# prometheus

- 基于Prometheus+Grafana搭建监控平台
  - https://blog.csdn.net/dyj095/article/details/127069292
  - .
- linux node exporter
  - https://prometheus.io/docs/guides/node-exporter/
  - wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-386.tar.gz
  - tar xvfz node_exporter-1.5.0.linux-386.tar.gz
  - nohup nice ./node_exporter-1.5.0.linux-386/node_exporter > node_exporter.out &
  - curl http://localhost:9100/metrics
  - .
- .

