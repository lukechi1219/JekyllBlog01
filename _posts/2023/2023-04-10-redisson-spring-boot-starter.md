---

# layout: post

author: luke_chi

title:  "Directly use Redisson in Spring Boot"
date:   2023-04-10 00:00:00 +0800

categories: []
tags: []
---

https://github.com/redisson/redisson/tree/master/redisson-spring-boot-starter

- for java 8
  - use redisson-spring-boot-starter 2.15.2

- /build.gradle

```groovy
dependencies {
    implementation 'org.redisson:redisson-spring-boot-starter:2.15.2'
}
```

- /src/main/resources/application.properties

```properties
spring.redis.redisson.config = classpath:redisson.yaml
```

- /src/main/resources/redisson.yaml

```yaml
singleServerConfig:
  password: xxxx
  address: "redis://127.0.0.1:6379"
codec: !<org.redisson.client.codec.StringCodec> {}
```
- in java

```java
@Autowired
private RedissonClient redisson;
```
