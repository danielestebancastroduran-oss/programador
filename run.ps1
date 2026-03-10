# Script para abrir Backend y Frontend con PowerShell
# Guarda este archivo como: run.ps1

$backendPath = "C:\Users\DANIEL CASTRO\OneDrive\Desktop\NODE JS\SIPO\backend"
$frontendPath = "C:\Users\DANIEL CASTRO\OneDrive\Desktop\NODE JS\SIPO\frontend"

# Abre PowerShell en Backend
Start-Process powershell.exe -ArgumentList "-NoExit -Command `"cd '$backendPath'; npm run start:dev`""

# Espera 3 segundos
Start-Sleep -Seconds 3

# Abre PowerShell en Frontend
Start-Process powershell.exe -ArgumentList "-NoExit -Command `"cd '$frontendPath'; npm run dev`""

Write-Host "✅ Backend y Frontend iniciados en nuevas ventanas"
Write-Host "Backend: http://localhost:3001"
Write-Host "Frontend: http://localhost:5173"
