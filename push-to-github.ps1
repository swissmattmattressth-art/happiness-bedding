# Happiness Bedding - Push to GitHub Script (PowerShell)

$repoUrl = "https://github.com/swissmattmattressth-art/happiness-bedding.git"

Write-Host "===================================================" -ForegroundColor Gold
Write-Host " Happiness Bedding - Push to GitHub Script " -ForegroundColor Gold
Write-Host " Target: $repoUrl " -ForegroundColor Gold
Write-Host "===================================================" -ForegroundColor Gold

Write-Host "`n1. กำลังสร้าง Git Repository..." -ForegroundColor Cyan
git init

Write-Host "`n2. กำลังเพิ่มไฟล์ทั้งหมดเข้า Stage..." -ForegroundColor Cyan
git add .

Write-Host "`n3. กำลังสร้าง Commit..." -ForegroundColor Cyan
git commit -m "Initial production build - Happiness Bedding website"

Write-Host "`n4. กำลังตั้งค่า Branch หลักเป็น main..." -ForegroundColor Cyan
git branch -M main

Write-Host "`n5. กำลังเชื่อมต่อ Remote Repository: $repoUrl ..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $repoUrl

Write-Host "`n6. กำลัง Push ไปยัง GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`n===================================================" -ForegroundColor Green
Write-Host " เสร็จสมบูรณ์! โค้ดถูกส่งไปยัง GitHub เรียบร้อยแล้ว " -ForegroundColor Green
Write-Host " https://github.com/swissmattmattressth-art/happiness-bedding " -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
