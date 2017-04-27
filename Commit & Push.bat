git add .
@echo off
set /p Message= "Input the commit message "
git commit -m "%Message%"
git push
pause