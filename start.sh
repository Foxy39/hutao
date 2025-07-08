#!/bin/bash

startWithCode() {
  NODE_ENV=production node --no-warnings main.js cd &
  node mantervivo.js
}

startWithQr() {
  NODE_ENV=production node --no-warnings main.js qr &
  node mantervivo.js
}

defaultStart() {
  NODE_ENV=production node --no-warnings main.js &
  node mantervivo.js
}

while :
do
  echo -e "\033[1;33m🔧 HUTAO BOT V8.0 UPDATE 💎\n🚀 INICIANDO, AGUARDE UM MOMENTO...\033[0m"

  if [ "$1" == "cd" ]; then
    startWithCode
  elif [ "$1" == "qr" ]; then
    startWithQr
  else
    defaultStart
  fi

  sleep 1
done