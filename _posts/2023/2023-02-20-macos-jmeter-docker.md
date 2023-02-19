---

# layout: post

author: luke_chi

title:  "Run JMeter GUI in Docker on macOS with XQuartz X11"
date:   2023-02-20 00:00:00 +0800

categories: []
tags: []
---

for details, please refer to my [git repo and docker file](https://github.com/lukechi1219/awesome-dockerfile/tree/main/jmeter){:target="_blank"}

notes:

- it's easy to run jmeter with Java 8 as a Docker container, but it requires extra work to show jmeter GUI on macOS while jmeter is running in Docker container.
- .
- the solution is to use XQuartz X11 on macOS.
  - https://gist.github.com/sorny/969fe55d85c9b0035b0109a31cbcb088
  - https://medium.com/@mreichelt/how-to-show-x11-windows-within-docker-on-mac-50759f4b65cb
  - https://www.ccc.tc/article/how-to-run-gui-app-in-docker-container
  - https://www.linkedin.com/pulse/my-understanding-x11-wrong-vijay-bheemineni/?trk=articles_directory
  - .
  - Install XQuartz via brew
    - brew install --cask xquartz
  - Start XQuartz
    - open -a XQuartz
  - Go to Security Settings and ensure that "Allow connections from network clients" is on
  - .
- we also need install following packages in our container
  - libxext-dev
    - https://zoomadmin.com/HowToInstall/UbuntuPackage/libxext-dev
  - libxrender-dev
    - https://zoomadmin.com/HowToInstall/UbuntuPackage/libxrender-dev
  - libxtst-dev
    - https://zoomadmin.com/HowToInstall/UbuntuPackage/libxtst-dev
  - .
- .

ref sites:

- https://medium.com/@vinodkrane/how-to-use-the-docker-container-with-jmeter-5dbf47aaa26d
- https://tongiwei.com/jmeter/
- .
- https://github.com/symbiote/docker-jmeter-ui
- https://vepo.medium.com/dockerized-jmeter-84228733e306
- .
- https://kaichu.io/posts/build-jmeter-docker-with-plugins/
- https://ithelp.ithome.com.tw/articles/10271231
- 
- .

extra:

- install Homebrew on macOS
  - https://brew.sh/index_zh-tw
- .
- ==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
  - (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/lukechimbp2023/.zprofile 
  - eval "$(/opt/homebrew/bin/brew shellenv)"
  - .
- Run "brew help" to get started
- .


# shell script to run jmeter in docker

- it's important to set DISPLAY environment variable <br>
  -e DISPLAY=host.docker.internal:0

.

```shell
open -a XQuartz

ps aux | grep Xquartz

xhost +localhost

xhost

# run jmeter with X11 forwarding GUI to macos and keep running until it quits
docker run --rm -e DISPLAY=host.docker.internal:0 --name=jmeter-v1 --net=host \
-v /Users/lukechimbp2023/WorkEnv/jmeter/test/input/jmx:/opt/test/input/jmx \
-v /Users/lukechimbp2023/WorkEnv/jmeter/test/input/testdata:/opt/test/input/testdata \
-v /Users/lukechimbp2023/WorkEnv/jmeter/test/report/html:/opt/test/report/html \
-v /Users/lukechimbp2023/WorkEnv/jmeter/test/report/jtl:/opt/test/report/jtl \
-v /Users/lukechimbp2023/WorkEnv/jmeter/test/report/outputputdata:/opt/test/report/outputdata \
-it -d jmeter:v1
```
