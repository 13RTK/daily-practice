#!/bin/bash

# 该脚本用于显示当前目录下的git仓库信息，并提示是否进行自动提交。支持中文和英文显示。

function set_language() {
  if [ "$language" == "cn" ]; then
    not_git_repo="当前目录不是一个git仓库。"
    current_repo_info="当前仓库信息："
    multiple_branches="当前仓库存在多个本地分支，请选择一个进行操作："
    enter_branch_name="请输入分支名称："
    multiple_remotes="当前仓库存在多个远程仓库，请选择一个进行操作："
    enter_remote_name="请输入远程仓库名称："
    auto_commit_prompt="是否要进行自动提交? (y/n)："
    commit_canceled="已取消自动提交。"
    enter_commit_msg="请输入提交信息："
    commit_success="提交成功！"
  else
    not_git_repo="The current directory is not a git repository."
    current_repo_info="Current repository information:"
    multiple_branches="There are multiple local branches in the current repository. Please choose one:"
    enter_branch_name="Please enter the branch name:"
    multiple_remotes="There are multiple remote repositories. Please choose one:"
    enter_remote_name="Please enter the remote repository name:"
    auto_commit_prompt="Do you want to auto-commit? (y/n):"
    commit_canceled="Auto-commit canceled."
    enter_commit_msg="Please enter the commit message:"
    commit_success="Commit successful!"
  fi
}

# 设置语言
read -p "请选择语言 (cn/en)：" language
set_language

# 检查是否存在.git目录
if [ ! -d .git ]; then
  echo "$not_git_repo"
  exit 1
fi

# 显示当前仓库信息
echo "$current_repo_info"
git status
echo

# 判断是否存在多个本地分支
local_branches=$(git branch | wc -l)
if [ $local_branches -gt 1 ]; then
  echo "$multiple_branches"
  git branch
  read -p "$enter_branch_name" chosen_branch
  git checkout $chosen_branch
fi

# 判断是否存在多个远程仓库
remote_count=$(git remote | wc -l)
if [ $remote_count -gt 1 ]; then
  echo "$multiple_remotes"
  git remote
  read -p "$enter_remote_name" chosen_remote
else
  chosen_remote=$(git remote)
fi

# 提示是否进行自动提交
read -p "$auto_commit_prompt" confirm
if [ "$confirm" != "y" ]; then
  echo "$commit_canceled"
  exit 0
fi

# 输入提交信息
read -p "$enter_commit_msg" commit_msg

# 添加所有更改的文件并进行提交
git add .
git commit -m "$commit_msg"
git push $chosen_remote

echo "$commit_success"
