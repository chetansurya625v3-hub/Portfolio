@echo off
set "GIT_PATH=C:\Program Files\Git\cmd\git.exe"

if not exist "%GIT_PATH%" (
    echo Error: Git not found at %GIT_PATH%
    pause
    exit /b 1
)

echo [1/4] Git detected:
"%GIT_PATH%" --version

echo.
echo [2/4] Ensuring branch is main...
"%GIT_PATH%" branch -M main

echo.
echo [3/4] Staging all files...
"%GIT_PATH%" add .
"%GIT_PATH%" commit -m "feat: portfolio ready for deployment" 2>nul

echo.
echo [4/4] Setting remote and pushing...
"%GIT_PATH%" remote remove origin 2>nul

set /p REPO_URL="Enter your exact GitHub repository URL (e.g. https://github.com/chetansurya625v3-hub/Portfolio.git): "
"%GIT_PATH%" remote add origin %REPO_URL%

"%GIT_PATH%" push -u origin main

echo.
echo Done! If you see any authentication prompt, sign in to your GitHub account.
pause
