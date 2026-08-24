#!/usr/bin/env bash
# The workbench fetches tokens/tokens.json on load. Opening the .dc.html straight
# off disk with file:// blocks that read and it silently falls back to built-in
# defaults. Serve the folder over http instead.
set -euo pipefail
PORT="${1:-8080}"
cd "$(dirname "$0")"
echo "Workbench: http://localhost:${PORT}/Token%20Workbench.dc.html"
exec python3 -m http.server "$PORT"
