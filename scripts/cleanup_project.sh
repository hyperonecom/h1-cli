#!/bin/sh
# Script designed to remove user's resources and data left after testing to ensure correct
# future testing in a clean environment.

PROJECT=${H1_PROJECT:-$1}
SKIPPED_CREDENTIALS=${H1_USER_CREDENTIALS:--}

[ -z "$PROJECT" ] && {
    echo "Missing argument or environment variable H1_PROJECT"; exit -1;
}

h1 vm           list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 vm          delete --yes --vm
h1 image        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 image       delete --yes --image
h1 disk         list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 disk        delete --yes --disk
h1 netgw        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 netgw       detach --netgw
h1 netgw        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 netgw       delete --yes --netgw
h1 network      list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 network     delete --yes --network
h1 ip           list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 ip          delete --yes --ip
h1 iso          list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 iso         delete --yes --iso
h1 firewall     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 firewall    delete --yes --firewall
h1 dns zone     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 dns zone    delete --yes --zone
h1 snapshot     list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 snapshot    delete --yes --snapshot
h1 vault        list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 vault       delete --yes --vault
h1 log          list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 log         delete --yes --log
h1 reservation  list --project-select $PROJECT -o id | xargs -r -n 1 -P 8 h1 reservation delete --yes --reservation
h1 user credentials list -o id | grep -v "$SKIPPED_CREDENTIALS" | xargs -r -n 1 h1 user credentials delete --yes --credentials
h1 project credentials list --project "$PROJECT" -o id | grep -v "$SKIPPED_CREDENTIALS" | xargs -r -n 1 h1 project credentials delete --yes --project "$PROJECT" --credentials
h1 project notification credits list --project "$PROJECT" -o tsv | xargs -r -n 1 h1 project notification credits delete --project "$PROJECT" --limit
