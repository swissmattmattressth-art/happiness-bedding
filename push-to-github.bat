@echo off
echo ===================================================
echo Happiness Bedding - Push to GitHub Script
echo ===================================================

set REPO_URL=https://github.com/swissmattmattressth-art/happiness-bedding.git

echo Target Repository: %REPO_URL%
echo.

echo 1. Initializing Git repository...
git init

echo.
echo 2. Adding files to Git stage...
git add .

echo.
echo 3. Creating initial commit...
git commit -m "Initial production build - Happiness Bedding website"

echo.
echo 4. Setting main branch...
git branch -M main

echo.
echo 5. Setting remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo.
echo 6. Pushing code to GitHub...
git push -u origin main

echo.
echo ===================================================
echo Completed! Your website code is now on GitHub.
echo ===================================================
pause
