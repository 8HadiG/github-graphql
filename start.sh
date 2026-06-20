#!/bin/bash

# Load token from .env file
source .env

# Read the GraphQL query from file (remove newlines and escape quotes)
QUERY=$(cat query.graphql | tr -d '\n' | sed 's/"/\\"/g')

# Create the JSON payload
JSON_PAYLOAD="{\"query\":\"$QUERY\"}"

# Send the request and save output
curl -X POST \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD" \
  https://api.github.com/graphql \
  -o curl_output.json

cat curl_output.json | jq '.' > results.json
echo "results saved to results.json"