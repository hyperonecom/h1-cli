set -euo pipefail
set -x

export H1_DEFAULT_OUTPUT='tsv'
# export H1_DEFAULT_VERBOSE='true'

h1 ip list --query "[].[_id]" | while read ip; do
    h1 ip delete --yes $ip
done
