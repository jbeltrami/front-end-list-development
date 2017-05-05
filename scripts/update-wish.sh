#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/wishes/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "wish": {
      "goal": "'"${TEXT}"'"
    }
  }'

echo
