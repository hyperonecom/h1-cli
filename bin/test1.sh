set -euo pipefail
set -x

export H1_DEFAULT_OUTPUT='tsv'
# export H1_DEFAULT_VERBOSE='true'

test () {
    network=$(./h1 network create --name cli-test-$1 --query "[].[_id]")
    ip=$(./h1 ip create --query "[].[_id]")
    netgw=$(./h1 netgw create --name cli-test-$1 --ip $ip --query "[].[_id]")

    ./h1 netgw attach $netgw --network $network
    ./h1 netgw detach $netgw

    # ./h1 ip associate $ip --private-ip 5954edd54c3feb4f95640610
    # curl http://62.181.9.49:8080/world.txt
    # ./h1 ip diassociate $ip 

    ./h1 network delete $network --yes
    ./h1 netgw delete $netgw --yes
    ./h1 ip delete $ip --yes
}

for i in {1..50}
do
    test fred-$i
done
