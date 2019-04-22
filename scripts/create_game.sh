# TOKEN="" sh assets/scripts/game_api/json_sh/create_game.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/games/" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
