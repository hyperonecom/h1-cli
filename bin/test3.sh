set -euo pipefail
set -x

export H1_DEFAULT_OUTPUT='tsv'
# export H1_DEFAULT_VERBOSE='true'

test () {
    network=$(./h1 network create --name cli-test-$1 --query "[].[_id]")
    gwIP=$(./h1 ip create --query "[].[_id]")
    netgw=$(./h1 netgw create --name cli-test-$1 --ip $gwIP --query "[].[_id]")

    ./h1 netgw attach $netgw --network $network
    publicIP=$(./h1 ip create --query "[].[_id]")
    privateIP=$(./h1 network ip create --network-id $network --query "[].[_id]")

    ./h1 ip associate $publicIP --private-ip $privateIP
}

for i in {1..50}
do
    test fred-$i
done
