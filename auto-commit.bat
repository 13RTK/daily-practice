@echo off
setlocal enabledelayedexpansion

echo 请选择语言 (cn/en)：
set /p language=

if "%language%"=="cn" (
  set not_git_repo=当前目录不是一个git仓库。
  set current_repo_info=当前仓库信息：
  set multiple_branches=当前仓库存在多个本地分支，请选择一个进行操作：
  set enter_branch_name=请输入分支名称：
  set multiple_remotes=当前仓库存在多个远程仓库，请选择一个进行操作：
  set enter_remote_name=请输入远程仓库名称：
  set auto_commit_prompt=是否要进行自动提交? (y/n)：
  set commit_canceled=已取消自动提交。
  set enter_commit_msg=请输入提交信息：
  set commit_success=提交成功！
) else (
  set not_git_repo=The current directory is not a git repository.
  set current_repo_info=Current repository information:
  set multiple_branches=There are multiple local branches in the current repository. Please choose one:
  set enter_branch_name=Please enter the branch name:
  set multiple_remotes=There are multiple remote repositories. Please choose one:
  set enter_remote_name=Please enter the remote repository name:
  set auto_commit_prompt=Do you want to auto-commit? (y/n):
  set commit_canceled=Auto-commit canceled.
  set enter_commit_msg=Please enter the commit message:
  set commit_success=Commit successful!
)

if not exist .git (
  echo !not_git_repo!
  exit /b 1
)

echo !current_repo_info!
git status
echo.

for /f "tokens=1,*" %%a in ('git branch ^| find /c "*"') do set local_branches=%%a
if !local_branches! GTR 1 (
  echo !multiple_branches!
  git branch
  set /p chosen_branch=!enter_branch_name!
  git checkout !chosen_branch!
)

for /f "tokens=1,*" %%a in ('git remote ^| find /c "*"') do set remote_count=%%a
if !remote_count! GTR 1 (
  echo !multiple_remotes!
  git remote
  set /p chosen_remote=!enter_remote_name!
) else (
  for /f "tokens=1,*" %%a in ('git remote') do set chosen_remote=%%a
)

echo !auto_commit_prompt!
set /p confirm=
if not "!confirm!"=="y" (
  echo !commit_canceled!
  exit /b 0
)

echo !enter_commit_msg!
set /p commit_msg=

git add .
git commit -m "!commit_msg!"
git push !chosen_remote!

echo !commit_success!
