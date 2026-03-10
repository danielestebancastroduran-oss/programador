@echo off
REM Script para ejecutar SIPO (Backend + Frontend)

echo ========================================
echo   SIPO - Iniciando Backend + Frontend
echo ========================================

REM Abrir Backend en una nueva ventana
start cmd /k "cd "C:\Users\DANIEL CASTRO\OneDrive\Desktop\NODE JS\SIPO\backend" && npm run start:dev"

REM Esperar un poco para que inicie el backend
timeout /t 3 /nobreak

REM Abrir Frontend en otra ventana
start cmd /k "cd "C:\Users\DANIEL CASTRO\OneDrive\Desktop\NODE JS\SIPO\frontend" && npm run dev"

echo.
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Abre tu navegador en http://localhost:5173
pause
