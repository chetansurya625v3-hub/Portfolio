# Automated Git Push Helper for Chetan Surya Portfolio
$gitExe = "C:\Program Files\Git\cmd\git.exe"

if (-not (Test-Path $gitExe)) {
    Write-Host "Error: Git executable not found at $gitExe" -ForegroundColor Red
    exit 1
}

Write-Host ">>> Using Git at: $gitExe" -ForegroundColor Green
& $gitExe --version

# Check remote
$existingRemote = & $gitExe remote get-url origin 2>$null

if (-not $existingRemote) {
    $defaultUrl = "https://github.com/chetansurya625v3-hub/Portfolio.git"
    Write-Host ""
    Write-Host "Enter your full GitHub Repository URL (or press Enter for '$defaultUrl'):" -ForegroundColor Cyan
    $repoUrl = Read-Host
    if ([string]::IsNullOrWhiteSpace($repoUrl)) {
        $repoUrl = $defaultUrl
    }
    
    Write-Host ">>> Adding remote origin: $repoUrl" -ForegroundColor Yellow
    & $gitExe remote add origin $repoUrl
} else {
    Write-Host ">>> Remote origin already set to: $existingRemote" -ForegroundColor Yellow
}

# Ensure branch is main
& $gitExe branch -M main

# Add and commit any unstaged changes
& $gitExe add .
& $gitExe commit -m "Update portfolio files" 2>$null

# Push to GitHub
Write-Host ""
Write-Host ">>> Pushing to GitHub (main branch)..." -ForegroundColor Cyan
& $gitExe push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host ">>> SUCCESS: All files successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host ">>> If prompted for authentication, log in to GitHub in the popup window or use a Personal Access Token." -ForegroundColor Yellow
}

