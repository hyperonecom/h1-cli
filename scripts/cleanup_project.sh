#!/bin/sh
# Script designed to remove user's resources and data left after testing to ensure correct
# future testing in a clean environment.
set -x
PROJECT=${HYPERONE_PROJECT:-$1}
SKIPPED_CREDENTIALS=${HYPERONE_USER_CREDENTIALS:--}

[ -z "$PROJECT" ] && {
    echo "Missing argument or environment variable HYPERONE_PROJECT"; exit 64;
}
# Decompose resources
h1 network      list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 network firewall remove --network
h1 netgw        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 netgw       detach --netgw
# Delete all resources
h1 vm           list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 vm          delete --project-select $PROJECT --yes --vm
h1 image        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 image       delete --project-select $PROJECT --yes --image
h1 disk         list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 disk        delete --project-select $PROJECT --yes --disk
h1 netgw        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 netgw       delete --project-select $PROJECT --yes --netgw
h1 network      list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 network     delete --project-select $PROJECT --yes --network
h1 ip           list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 ip          delete --project-select $PROJECT --yes --ip
h1 iso          list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 iso         delete --project-select $PROJECT --yes --iso
h1 firewall     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 firewall    delete --project-select $PROJECT --yes --firewall
h1 dns zone     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 dns zone    delete --project-select $PROJECT --yes --zone
h1 snapshot     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 snapshot    delete --project-select $PROJECT --yes --snapshot
h1 vault        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 vault       delete --project-select $PROJECT --yes --vault
h1 journal      list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 journal     delete --project-select $PROJECT --yes --journal
h1 reservation  list --project-select $PROJECT -o id --query "[?state=='Expired']" | xargs -r -n 1 -P 8 h1 reservation delete --project-select $PROJECT --yes --reservation
h1 volume       list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 volume      delete --project-select $PROJECT --yes --volume
h1 container    list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 container   delete --project-select $PROJECT --yes --container
h1 agent        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 agent       delete --project-select $PROJECT --yes --agent
h1 registry     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 registry    delete --project-select $PROJECT --yes --registry
h1 user credentials list -o id | grep -v "$SKIPPED_CREDENTIALS" | xargs -r -n 1 h1 user credentials delete --yes --credentials
h1 project credentials list --project "$PROJECT" -o id | grep -v "$SKIPPED_CREDENTIALS" | xargs -r -n 1 h1 project credentials delete --yes --project "$PROJECT" --credentials
h1 project notification credits list --project "$PROJECT" -o tsv | xargs -r -n 1 h1 project notification credits delete --project "$PROJECT" --limit
h1 project token list --project "$PROJECT" -o id | xargs -r -n 1 h1 project token delete --yes --project "$PROJECT" --token
[ -n "$HYPERONE_PROJECT_SLAVE" ] && [ -z "$HYPERONE_PROJECT_MASTER" ] && {
	h1 project list -o tsv  | \
	grep -v -e "$HYPERONE_PROJECT_SLAVE" -e "$HYPERONE_PROJECT_MASTER" | \
	awk '{print $1}' | \
	xargs -r -n 1 h1 project delete --yes --project
}
