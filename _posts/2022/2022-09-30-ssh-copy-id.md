---

# layout: post

author: luke_chi

title:  "ssh-copy-id and scp"
date:   2022-09-30 00:00:00 +0800

categories: []
tags: [scp, ssh, linux]
---

Execute ssh or scp without entering password.

- ssh-keygen

```shell
ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_rsa):

Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in /home/username/.ssh/id_rsa_ubuntu.
Your public key has been saved in /home/username/.ssh/id_rsa_ubuntu.pub.

The key fingerprint is:
SHA256:nNnQckFbuegUs4WD3y+7YqwCaDhfUlX2J17jxF7X3FU xenby@demo.com

The key's randomart image is:
+---[RSA 2048]----+
|       .o++ ..  E|
|      .  *o+.  ..|
|     .  = *+ o ..|
|    .  . Ooo+ * +|
| . o    Soo..B o.|
|o + o     . ..o  |
| + o .   .  . .  |
|  .   .   +  o   |
|       ..o .o.   |
+----[SHA256]-----+
```

- ssh-copy-id

```shell
ssh-copy-id -i your_key_path username@server_host

/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys         

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'username@server_host'"
and check to make sure that only the key(s) you wanted were added.
```

- scp

```shell
scp -i your_private_key_path username@server_host:file_path local_path
```

# Reference

[https://xenby.com/b/220-%E6%95%99%E5%AD%B8-%E7%94%A2%E7%94%9Fssh-key%E4%B8%A6%E4%B8%94%E9%80%8F%E9%81%8Ekey%E9%80%B2%E8%A1%8C%E5%85%8D%E5%AF%86%E7%A2%BC%E7%99%BB%E5%85%A5]()

[https://dywang.csie.cyut.edu.tw/dywang/security/node85.html]()

[https://www.techrepublic.com/article/how-to-use-secure-copy-with-ssh-key-authentication/]()
