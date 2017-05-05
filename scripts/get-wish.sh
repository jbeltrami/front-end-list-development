#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/wishes/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
  --data '{
    "wishes": {
      "id": 1
    }
  }'

echo

# curl --include --request GET https://ga-wdi-boston.herokuapp.com/games/${ID}
#   --header "Content-Type: application/json" \
#   --data '{
#   "game": {
#     "id": 1,
#     "cells": ["o","x","o","x","o","x","o","x","o"],
#     "over": true,
#     "player_x": {
#       "id": 1,
#       "email": "and@and.com"
#     },
#     "player_o": {
#       "id": 3,
#       "email": "dna@dna.com"
#     }
#   }
# }'
