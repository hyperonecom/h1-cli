#!/bin/sh
set -eux
h1 vm list | grep 'a1.micro' | grep 'container' | awk '{print $1}' | xargs -n1 -P8 -r h1 vm turnoff --vm
h1 vm list | grep 'a1.micro' | grep 'container' | awk '{print $1}' | xargs -n1 -P8 -r h1 vm delete --yes --vm
h1 disk list | grep -E '[0-9a-f]{8}-[0-9a-f]{4}' | awk '{print $1}' | xargs -n 1 -P 8 -r h1 disk delete --yes --no-wait --disk
