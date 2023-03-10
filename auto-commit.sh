# Only for one local branch and one branch of one remote repository
checkRemote=$(git remote)
currentBranch=$(git branch)
date=$(date)
inputPrompt="Are you want to use auto commit?(y/n)"

echo "Welcome to auto commit tool! Tody is ${date}"
echo "Your remote repo is:${checkRemote}"
echo "Your current branch is:${currentBranch/* /}"
echo "${inputPrompt}"

while true; do
  read answer

  if [ "$answer" == "y" ]; then
    echo "\nStart auto commit......"
    echo "Please input the commit content for this push:"
    read commitDescription

    echo "Your commit is: ${commitDescription}"

    # Git add -> commit -> push
    git add ./
    git commit -m "${commitDescription}"
    git push -u ${checkRemote}
    break
  elif [ "$answer" == "n" ]; then
    echo "Exit......"
    break
  else
    echo "Your input is wrong, please try again."
    echo "${inputPrompt}"
  fi
done
