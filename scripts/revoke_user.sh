#!/bin/bash
set -eux
USERNAME="$1"
PROJECT="$2";
ORGANISATION=$(h1 project show --project "$PROJECT" --query '[].{o:organisation}' -o tsv 2>/dev/null)

h1 project access revoke --email "$USERNAME" --project "$PROJECT";
h1 organisation access revoke --email "$USERNAME" --organisation "$ORGANISATION"
