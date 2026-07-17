#!/bin/bash
# Biome wrapper script for VS Code extension
exec "$(dirname "$0")/node_modules/@biomejs/cli-darwin-arm64/biome" "$@"
