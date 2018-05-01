---
title: "Mac OS 终端使用 subl 运行 Sublime Text 3"
path: "launch-sublime-text-from-command-line"
date: "2015-05-09"
tags: [macOS, Sublime, Editor]
---

1.添加link

```bash
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```

2.编辑PATH

```bash
vim ~/.bash_profile
```

3.添加PATH

```bash
export PATH=/usr/local/bin:$PATH
```

```bash
esc -> shift + : -> wq保存退出
```

4.应用

```bash
source ~/.bash_profile
```
