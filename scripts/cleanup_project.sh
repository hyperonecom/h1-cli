#!/bin/bash
PROJECT=${H1_PROJECT:-$1}
[ -z "$PROJECT" ] && {
    echo "Missing argument or environment variable H1_PROJECT"; exit -1;
}

h1 vm       list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 vm       delete --yes --vm
h1 image    list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 image    delete --yes --image
h1 disk     list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 disk     delete --yes --disk
h1 netgw    list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 netgw    detach --netgw
h1 netgw    list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 netgw    delete --yes --netgw
h1 network  list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 network  delete --yes --network
h1 ip       list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 ip       delete --yes --ip
h1 iso      list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 iso      delete --yes --iso
h1 firewall list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 firewall delete --yes --firewall
h1 dns zone list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 dns zone delete --yes --zone
h1 snapshot list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 snapshot delete --yes --snapshot
h1 vault    list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 vault    delete --yes --vault
h1 image    list --output tsv --project-select $PROJECT --query '[].{id: _id}' | xargs -r -n 1 -P 8 h1 image    delete --yes --image
