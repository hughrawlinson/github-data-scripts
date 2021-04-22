#!/usr/bin/env bash

repos=$(cat $1 | cut -d, -f3 | sort | jq -r | grep -v '^null$')

for repo in $repos
do
  filename="$( echo $repo | sed 's/\// /' )"
  echo $repo | xargs ts-node get-data-for-public-repo.ts $repo > "./data/$filename.json"
  sleep 0.2
done