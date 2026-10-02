$ErrorActionPreference = "Stop"

$bundle = "E:\DevTools\Ruby33\bin\bundle.bat"
$projectRoot = Split-Path -Parent $PSScriptRoot

if (-not (Test-Path -LiteralPath $bundle)) {
    throw "Ruby Bundler was not found at $bundle. Install Ruby or update this path."
}

Set-Location -LiteralPath $projectRoot
& $bundle exec jekyll serve --livereload --host 127.0.0.1
