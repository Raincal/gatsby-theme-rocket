---
title: "Gogs 与主机共享 22 端口"
slug: "gogs-share-22-port"
date: "2018-03-10"
tags: [Gogs, Git, SSH, Docker]
---

在使用 Docker 安装 Gogs 时，一般会把容器的 22 端口映射到主机的其它端口(比如 10022)
在以 SSH 方式 clone 项目时，URL 长这样

> ssh://git@git.example.com:10022:username/project.git

但我们想要的是类似于 GitHub 那样的，这时需要把 Gogs 的 SSH 端口设置为 22

> git@git.example.com:username/project.git

<!-- more -->

下面说一下主要步骤

## 创建 git 用户

```bash
[root]$ useradd git
[root]$ id git    # 获取uid和gid
uid=1002(git) gid=1002(git) groups=1002(git)
[root]$ usermod -aG docker git    # 把git用户加入docker组
[root]$ su git
[git]$ mkdir -p ~/gogs/data   # 在git用户下创建gogs/data文件夹，作为gogs容器主要数据的挂载目录
```

## 安装 Gogs

```bash
[git]$ docker run -d --name=gogs -p 10022:22 -p 10080:3000 -v ~/gogs/data:/data -e "PUID=1002" -e "PGID=1002" --restart=always gogs/gogs     # PUID PGID与上面获取的uid gid保持一致
[git]$ ln -s ~/gogs/data/git/.ssh ~/    # 将gogs的.ssh目录软连接到本地的.ssh
```

现在可以通过服务器外网 ip:10080 进入安装页面，也可以等反代设置好后通过域名进行访问我用的数据库是 Sqlite3，不需要额外配置，如果你选择的是其它数据库，可以参考[这篇文章](https://www.jianshu.com/p/424627516ef6)
相关配置可以参考[官方文档](https://gogs.io/docs/advanced/configuration_cheat_sheet)

## 生成 SSH key

```bash
[git]$ ssh-keygen -t rsa -b 4096 -C "git@git.example.com"
[git]$ cd ~/.ssh
[git]$ cat id_rsa.pub >> authorized_keys
[git]$ chmod 600 authorized_keys
```

在 authorized_keys 最前面添加

```bash
no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty ssh-rsa AAAAB3NzaC1y..........YGedddqAN6w== git@git.example.com
```

## Caddy 反向代理

```bash
[root]$ mkdir caddy && cd $_
```

在 caddy 目录下创建 Caddyfile 文件，下面是参考配置

    git.example.com {
        tls git@example.com     # 填写你的邮箱，用于申请证书
        proxy / your-ip:10080
        header / Strict-Transport-Security "max-age=31536000;"      # 开启HSTS
        gzip
    }

### 启动 caddy

```bash
[root]$ docker run -d --name=caddy -v ~/caddy/Caddyfile:/etc/Caddyfile -v ~/.caddy:/root/.caddy -p 80:80 -p 443:443 --restart=always abiosoft/caddy
```

## 配置 git 用户登录问题

```bash
[root]$ mkdir -p /app/gogs/
[root]$ cat >/app/gogs/gogs <<'END'
#!/bin/sh
ssh -p 10022 -o StrictHostKeyChecking=no git@127.0.0.1 \
"SSH_ORIGINAL_COMMAND=\"$SSH_ORIGINAL_COMMAND\" $0 $@"
END
[root]$ chmod 755 /app/gogs/gogs
```

> 这样就差不多完成了，下面需要在本地生成 SSH 密匙，然后在 web 端把密匙添加到 Gogs
> 如果需要修改 Gogs 的配置，比如安装的时候 DOMAIN 写的 IP 现在要修改为域名，可以到/home/git/gogs/data/gogs/conf/找到 app.ini，修改完后重启 gogs 容器

## 参考文章

[安装 Gogs 并共享主机 22 端口](http://notes.guoliangwu.com/2018/01/09/Install-and-configure-Gogs-with-openSSH-Server/)

[Share port 22 between Gogs inside Docker & the local system](http://www.ateijelo.com/blog/2016/07/09/share-port-22-between-docker-gogs-ssh-and-local-system)
