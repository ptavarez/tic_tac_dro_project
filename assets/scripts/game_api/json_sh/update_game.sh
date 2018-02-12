# TOKEN="" sh assets/scripts/game_api/json_sh/create_game.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${0}"'",
        "value": "'"${X}"'"
      },
      "over": "'"${FALSE}"'"
    }
  }'

echo
