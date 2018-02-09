# TOKEN="BAhJIiUwNDcyNTQxMWQ2YmY5ZTRhMWY4ODViYjkzZjJiMmZlOQY6BkVG--31f929f23eeb20176e33daadb9d9d0d19912055c" OLD_PASSWORD=cool NEW_PASSWORD=loko ID=2 sh scripts/json/change_password.sh

curl "http://tic-tac-toe.wdibos.com/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
