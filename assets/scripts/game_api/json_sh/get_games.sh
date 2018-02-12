# TOKEN="" sh assets/scripts/game_api/json_sh/get_games.sh

curl --include --request GET "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "games": [
    {
      "id": "'"${1}"'",
      "cells": "'"${ARRAY}"'",
      "over": "'"${TRUE}"'",
      "player_x": {
        "id": "'"${1}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": {
        "id": "'"${3}"'",
        "email": "'"${EMAIL}"'"
      }
    }
    ]
  }'

echo
