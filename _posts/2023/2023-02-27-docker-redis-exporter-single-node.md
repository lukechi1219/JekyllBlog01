---

# layout: post

author: luke_chi

title:  "Docker + Redis Exporter: single node + Prometheus"
date:   2023-02-27 00:00:00 +0800

categories: []
tags: []
---

# Docker + Redis Exporter: single node

## Dockerfile

```dockerfile
FROM arm64v8/openjdk:8-jre

# redis_exporter Version, for macos
ENV REDIS_EXPORTER_VERSION 1.46.0.linux-arm64


RUN mkdir -pv /opt

# Download and unpack the redis_exporter tar file
RUN cd /opt \
    && wget https://github.com/oliver006/redis_exporter/releases/download/v1.46.0/redis_exporter-v$REDIS_EXPORTER_VERSION.tar.gz \
    && tar xzf redis_exporter-v$REDIS_EXPORTER_VERSION.tar.gz \
    && rm redis_exporter-v$REDIS_EXPORTER_VERSION.tar.gz

# Create a symlink to the jmeter process in a normal bin directory
RUN ln -s /opt/redis_exporter-v$REDIS_EXPORTER_VERSION/redis_exporter /usr/local/bin

# Indicate the default command to run
CMD ["/bin/sh"]
```

## Docker run command

```shell
docker run --rm --name=redis_exporter -p 9121:9121 \
-idt redis_exporter:v1 \
redis_exporter \
-redis.addr 10.100.10.101:7000 \
--redis.password ${password} \
-web.listen-address 172.17.0.2:9121
```

## Prometheus config

```yaml
- job_name: 'redis_exporter'
  static_configs:
  - targets: ['172.17.0.2:9121']
```
