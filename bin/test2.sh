set -euo pipefail
set -x

export H1_DEFAULT_OUTPUT='tsv'
export H1_DEFAULT_VERBOSE='true'

test () {
    read ipId ipAddress <<< "$(./h1 ip create --query "[].[_id,address]")"

    ./h1 ip associate $ipId --private-ip 595e1d6620f113ad616f0fb8
    data=$(curl --connect-timeout 5 http://$ipAddress:8080/world.txt)

    if [[ "$data" != "hello" ]]; then
        exit 1
    fi

    ./h1 ip disassociate $ipId 
    ./h1 ip delete $ipId --yes
}

for i in {1..50}
do
    test $i
done
