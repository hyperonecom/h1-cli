#!/bin/bash
set -eu

BINARY=$1
expected_version=$(jq '.version' package.json -r)
output=$($1 --version 2>&1);

if [ "$output" != "$expected_version" ]; then
	echo "The binary '$BINARY' did not return the correct output of version.";
	echo "Returned output":
	echo $output;
fi
