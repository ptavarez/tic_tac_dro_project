# TOKEN="BAhJIiVkNTU4M2Y2MDMzMGQ3MGRiYTVhNzRmNzE5YjA0MDFmNQY6BkVG--8fe8bb19db438f80082178df8406052ed9ee0835" ID=2 sh scripts/json/sign-out.sh

curl "http://tic-tac-toe.wdibos.com/sign-out/{$ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \


echo
