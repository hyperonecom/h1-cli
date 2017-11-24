set -euo pipefail
set -x

export H1_DEFAULT_OUTPUT='tsv'
# export H1_DEFAULT_VERBOSE='true'

h1 netgw list --query "[].[_id,primaryIP]" | while read netgw gwIP; do
    network=$(h1 netgw show $netgw --query "[].[network._id]")

    if [[ "$network" != "-" ]]; then
        echo $netgw $network;

        h1 network ip list --network-id $network --query "[].[associated.fip]" | while read fip; do
            if [[ "$fip" != "-" ]]; then
                h1 ip disassociate $fip
                h1 ip delete --yes $fip
            fi
        done

        h1 netgw detach $netgw
        h1 network delete --yes $network
    fi

    h1 netgw delete --yes $netgw
    h1 ip delete --yes $gwIP
done
