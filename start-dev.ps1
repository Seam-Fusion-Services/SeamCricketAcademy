
Write-Host "Checking for existing processes on port 4321..."
$process = Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique

if ($process) {
    Write-Host "Killing process ID: $process"
    Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
} else {
    Write-Host "No process found on port 4321."
}

Write-Host "Starting Astro development server..."
npm run dev

Write-Host "Server stopped. Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
