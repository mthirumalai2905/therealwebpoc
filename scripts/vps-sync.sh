#!/bin/bash
set -euo pipefail
cd /home/morph/therealwebpoc
git fetch origin main
LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse origin/main)"
if [ "$LOCAL" = "$REMOTE" ]; then
  exit 0
fi
git pull --ff-only origin main
npm ci
npm run build
if command -v fuser >/dev/null; then
  fuser -k 3010/tcp >/dev/null 2>&1 || true
fi
sleep 1
nohup /usr/bin/npm start >> /home/morph/rtw.log 2>&1 &
echo "$(date -Is) updated to $(git rev-parse --short HEAD)" >> /home/morph/rtw-sync.log
