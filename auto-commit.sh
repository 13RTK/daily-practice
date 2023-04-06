#!/bin/bash

# 判断当前目录是否是一个 Git 仓库
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "当前目录不是一个 Git 仓库"
  exit 1
fi

# 显示仓库信息
echo "Git 仓库信息："
git remote -v
echo ""
git branch -a

# 提示用户是否要进行提交
read -p "是否要进行自动提交（y/n）：" choice
if [[ "$choice" != "y" ]]; then
  echo "已取消自动提交"
  exit 0
fi

# 输入本地分支和远程仓库
read -p "请输入要提交的本地分支名：" local_branch
read -p "请输入要提交的远程仓库名：" remote_name
read -p "请输入要提交的远程分支名：" remote_branch

# 判断本地分支和远程分支是否存在
if ! git show-ref --verify --quiet "refs/heads/$local_branch"; then
  echo "本地分支 $local_branch 不存在"
  exit 1
fi
if ! git show-ref --verify --quiet "refs/remotes/$remote_name/$remote_branch"; then
  echo "远程分支 $remote_name/$remote_branch 不存在"
  exit 1
fi

# 输入提交信息
read -p "请输入提交信息：" message

# 提交代码
git checkout $local_branch
git pull $remote_name $remote_branch
git add .
git commit -m "$message"
git push $remote_name $local_branch:$remote_branch

echo "已提交代码：$message"
