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