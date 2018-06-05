set -euo pipefail
set -x

export H1_DEFAULT_OUTPUT='tsv'
# export H1_DEFAULT_VERBOSE='true'

keyfile="/tmp/sshkey.$RANDOM"
ssh-keygen -N "12345" -f "$keyfile"
ssh-keygen -p -P "12345" -N "" -f "$keyfile";
ssh-add "$keyfile";

image_id=$(./h1 image list --recommend --query "[?description.distro=='ubuntu'] | [[0].[_id]]")
sshkey_id=$(./h1 user credentials add --sshkey-file "$keyfile.pub" --name cli-test --query "[].{id:_id}" | tail -n 2 | head -n 1)

disk_name="cli-test-$RANDOM";

vm_id=$(h1 vm create --name cli-test \
                     --sshkey "$sshkey_id" \
                     --image "$image_id" \
                     --type a1.micro \
                     --os-disk $disk_name,archive,100 \
                     --query "[].[_id]")
echo "Sleeping to host get up";
sleep 120
./h1 vm ssh "$vm_id" "lsb_release -a";
./h1 vm delete "$vm_id";
./h1 disk delete "$disk_name";
ssh-add -d "$keyfile";
rm "$keyfile";