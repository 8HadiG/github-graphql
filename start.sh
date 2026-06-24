#!/bin/bash

# Load token from .env file
source .env

# Read the GraphQL query from file (remove newlines and escape quotes)
QUERY=$(jq -Rs . < query.graphql)
VARIABLES=$(cat var-api.json)

# Create the JSON payload
JSON_PAYLOAD="{\"query\":$QUERY,\"variables\":$VARIABLES}"

# Send the request and save output
curl -X POST \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD" \
  https://api.github.com/graphql \
  -o curl_output.json

jq --slurpfile vars var-jq.json -f filter.jq curl_output.json > results.json

echo "results saved to results.json"