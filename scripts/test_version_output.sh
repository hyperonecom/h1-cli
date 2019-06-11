#!/bin/bash
set -eux

BINARY=$(realpath $1)
MODE=${2:-native}
expected_version=$(jq '.version' package.json -r)

if [ "$MODE" == "alpine" ]; then
	output=$(docker run -v $BINARY:/bin/h1 node:alpine /bin/h1 --version);
else
	output=$($BINARY --version 2>&1);
fi;

if [ "$output" != "$expected_version" ]; then
	echo "The binary '$BINARY' did not return the correct output of version.";
	echo "Returned output":
	echo $output;
	exit 2
fi
