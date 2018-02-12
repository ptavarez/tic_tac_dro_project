# TOKEN="BAhJIiVkYTc5YTk5ZGIxNjNiNTE5MjdiYTBjYmJlZTIzNTE3MgY6BkVG--c8d849d3c2392673abdbc9be49c7a17876265c6c" sh assets/scripts/game_api/json_sh/create_game.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/games/" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${3}"'",
      "cells": "'"${ARRAY}"'",
      "over": "'"${FALSE}"'",
      "player_x": {
        "id": "'"${1}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": "'"${NULL}"'"
    }
  }'

echo
