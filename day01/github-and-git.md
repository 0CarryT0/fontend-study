# git+github入门

主要学习了如何使用git对github仓库做版本管理。笔者主要使用命令行。

### 前置

安装了git，能上github。

### 新建仓库并连接

1. 新建github仓库

2. git链接仓库，在git bash中进行命令行交互。(复制创建仓库后建议命令即可)

   ```bash
   echo "# xxx" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin xxxxxx.git
   git push -u origin main
   ```

### 更新项目版本

1. 更新项目（以下为全部更新命令示例）

   ```bash
   git add .
   ```

2. commit备注，作为修改记录备注（"添加xxxx"...）

   ```bash
   git commit -m "xxxx"
   ```

3. 拉取当前分支最新代码

   ```bash
   git pull
   ```

4. 提交修改

   ```bash
   git push -u origin <分支名>
   ```

5. 查看修改版本日志，推荐直接在github上看，不必看这个log

   ```bash
   git log
   ```

### 代理出错

上github懂得都懂，科学上网。而挂代理导致错误:

```
fatal: unable to access 'xxxx.git/': OpenSSL SSL_read: Connection was reset, errno 10054
```

需要查看代理端口，修改git config：

```bash
git config --global http.proxy 127.0.0.1:xxxx
git config --global https.proxy 127.0.0.1:xxxx
```

