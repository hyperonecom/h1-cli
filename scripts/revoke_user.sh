#!/bin/sh
set -ux
# Missing "-e" to attempt revoke organisation access even
# when project access revoke fail
USERNAME="$1"
PROJECT="$2";
ORGANISATION=$(h1 project show --project "$PROJECT" --query '[].{o:organisation}' -o tsv 2>/dev/null)

h1 project access revoke -v --email "$USERNAME" --project "$PROJECT";
h1 organisation access revoke -v --email "$USERNAME" --organisation "$ORGANISATION"
