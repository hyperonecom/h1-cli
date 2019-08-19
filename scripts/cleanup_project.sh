#!/bin/sh
# Script designed to remove user's resources and data left after testing to ensure correct
# future testing in a clean environment.
set -x
PROJECT=${HYPERONE_PROJECT:-$1}
SKIPPED_CREDENTIALS=${HYPERONE_USER_CREDENTIALS:--}

[ -z "$PROJECT" ] && {
    echo "Missing argument or environment variable HYPERONE_PROJECT"; exit 64;
}

function delete_protected () {
	category=$1;
	resource_type=$(echo "$category" | awk '{print $(NF)}');
	while read ID; do
		h1 $category tag delete --tag protected --"$resource_type" "$ID";
		h1 $category delete --project-select $PROJECT --yes --"$resource_type" "$ID";
	done;
};

# Decompose resources
h1 network      list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 network firewall remove --network
h1 netgw        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 netgw       detach --netgw
h1 website list --project-select $PROJECT -o id | while read WEBSITE; do
	h1 website snapshot list --project-select $PROJECT --website "$WEBSITE" -o id | \
	xargs -r -n 1 -P 8 h1 website snapshot delete --yes --project-select $PROJECT --website "$WEBSITE" --snapshot;
done;
# Delete all resources
h1 dns zone     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 dns zone delete --project-select $PROJECT --yes --zone
h1 vm           list --project-select $PROJECT -o id | delete_protected "vm";
h1 image        list --project-select $PROJECT -o id | delete_protected "image";
h1 disk         list --project-select $PROJECT -o id | delete_protected "disk";
h1 netgw        list --project-select $PROJECT -o id | delete_protected "netgw";
h1 network      list --project-select $PROJECT -o id | delete_protected "network";
h1 ip           list --project-select $PROJECT -o id | delete_protected "ip";
h1 iso          list --project-select $PROJECT -o id | delete_protected "iso";
h1 firewall     list --project-select $PROJECT -o id | delete_protected "firewall";
h1 snapshot     list --project-select $PROJECT -o id | delete_protected "snapshot";
h1 vault        list --project-select $PROJECT -o id | delete_protected "vault";
h1 log          list --project-select $PROJECT -o id | delete_protected "log";
h1 reservation  list --project-select $PROJECT -o id | delete_protected "reservation";
h1 volume       list --project-select $PROJECT -o id | delete_protected "volume";
h1 container    list --project-select $PROJECT -o id | delete_protected "container";
h1 agent        list --project-select $PROJECT -o id | delete_protected "agent";
h1 website      list --project-select $PROJECT -o id | delete_protected "website";
h1 database     list --project-select $PROJECT -o id | delete_protected "database";
h1 registry     list --project-select $PROJECT -o id | delete_protected "registry";
h1 user credentials list -o id | grep -v "$SKIPPED_CREDENTIALS" | xargs -r -n 1 h1 user credentials delete --yes --credentials
h1 project credentials list --project "$PROJECT" -o id | grep -v "$SKIPPED_CREDENTIALS" | xargs -r -n 1 h1 project credentials delete --yes --project "$PROJECT" --credentials
h1 project notification credits list --project "$PROJECT" -o id | xargs -r -n 1 h1 project notification credits delete --project "$PROJECT" --limit
h1 project token list --project "$PROJECT" -o id | xargs -r -n 1 h1 project token delete --yes --project "$PROJECT" --token
[ -n "$HYPERONE_PROJECT_SLAVE" ] && [ -z "$HYPERONE_PROJECT_MASTER" ] && {
	h1 project list -o tsv  | \
	grep -v -e "$HYPERONE_PROJECT_SLAVE" -e "$HYPERONE_PROJECT_MASTER" | \
	awk '{print $1}' | \
	xargs -r -n 1 h1 project delete --yes --project
}
