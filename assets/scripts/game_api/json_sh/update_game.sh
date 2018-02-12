# TOKEN="" ID= INDEX= VALUE= OVER= sh assets/scripts/game_api/json_sh/update_game.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
