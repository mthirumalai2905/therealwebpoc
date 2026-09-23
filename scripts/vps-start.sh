#!/bin/bash
set -euo pipefail
cd /home/morph/therealwebpoc
if curl -sf -o /dev/null http://127.0.0.1:3010; then
  exit 0
fi
if command -v fuser >/dev/null; then
  fuser -k 3010/tcp >/dev/null 2>&1 || true
fi
nohup /usr/bin/npm start >> /home/morph/rtw.log 2>&1 &
sleep 2
