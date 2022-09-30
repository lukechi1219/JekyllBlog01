---

# layout: post

author: luke_chi

title:  "check if file exists on remote host with ssh"
date:   2022-09-30 00:00:00 +0800

categories: []
tags: [ssh, linux]
---

check if file exists on remote host with ssh

https://stackoverflow.com/questions/12845206/check-if-file-exists-on-remote-host-with-ssh

```shell
#!/bin/bash
USE_IP='-o StrictHostKeyChecking=no username@192.168.1.2'

FILE_NAME=/home/user/file.txt

SSH_PASS='sshpass -p password-for-remote-machine'

if $SSH_PASS ssh $USE_IP stat $FILE_NAME \> /dev/null 2\>\&1
    then
        echo "File exists"
    else
        echo "File does not exist"
fi
```

