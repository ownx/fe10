学习git的资源

https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E4%BD%95%E8%B0%93%E5%88%86%E6%94%AF

## 场景：拉取别人的项目
把项目地址克隆一下

```
git clone 仓库地址 （. 点代表克隆当前目录 如果写目录名字就把这个仓库克隆到 以这个名字为名字的文件夹）

mkdir fe10 

cd fe10

git clone  https://github.com/itguide/fe10.git .
```
## 场景：把自己的项目推送到github仓库
```
    mkdir fe10
    cd fe10
    git init # 把仓库初始化
    git status # 查看本地有哪写文件需要提交，检查后，如果不需要提交
        忽略文件：
            .gitignore 
            .idea
            在这个里面写的东西，讲不会推送到远程
    git add . # 把本地的文件添加到仓库
    git commit -am"本次提交的注释" #本次提交的注释
    git remote add origin https://github.com/itguide/fe10.git # 给本地的仓库加上远程地址

    git push origin master # 把提交后的代码推送到远程仓库，后面是分支名字，想推送哪个分支就写哪个分支名字

```

## 场景：把代码仓库更新

    把仓库代码更新
```
    git pull origin master
```

常用命令：
    git remote -v #查看本地的库的远程地址

## 创建分支 

创建并且切换到分支
git checkout -b 分支名字
git branch # 如果不加分支名字，就是把分支列出来
git branch 分支名字  # 创建分支
git checkout 分支名字

分支概念：

何谓分支
为了理解 Git 分支的实现方式，我们需要回顾一下 Git 是如何储存数据的。或许你还记得第一章的内容，Git 保存的不是文件差异或者变化量，而只是一系列文件快照。

在 Git 中提交时，会保存一个提交（commit）对象，该对象包含一个指向暂存内容快照的指针，包含本次提交的作者等相关附属信息，包含零个或多个指向该提交对象的父对象指针：首次提交是没有直接祖先的，普通提交有一个祖先，由两个或多个分支合并产生的提交则有多个祖先。

为直观起见，我们假设在工作目录中有三个文件，准备将它们暂存后提交。暂存操作会对每一个文件计算校验和（即第一章中提到的 SHA-1 哈希字串），然后把当前版本的文件快照保存到 Git 仓库中（Git 使用 blob 类型的对象存储这些快照），并将校验和加入暂存区域：


github 私有仓库

github 组织 20美金

gitlab.com 推荐
git.oschina.net
coding.net
https://gitee.com/
内部公司自己搭建


git pull origin vueday2

git fetch origin 
 
git checkout vueday2