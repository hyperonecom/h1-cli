#!/bin/bash
set -ex
[ -z "$1" ] && {
	echo "Usage: $0 [new_version]";
	exit 1;
}
FORK_REPO="git@github.com:hyperonecom/aports.git";
UPSTREAM_REPO="git@github.com:alpinelinux/aports.git";
PACKAGE_NAME="testing/h1-cli"
NEW_VERSION="$1";
[ -d "aports" ] || {
	git clone "$UPSTREAM_REPO" aports;
}
pushd aports;
git remote add fork "$FORK_REPO" || echo "Fork remote already exists";
sed -E -i "s/pkgver=.+?$/pkgver=${NEW_VERSION}/g" "${PACKAGE_NAME}/APKBUILD"
sed -i "s/pkgrel=(.+?)/pkgrel=0/g" "${PACKAGE_NAME}/APKBUILD";
git diff "${PACKAGE_NAME}/APKBUILD" || {
	echo 'Nothing to update';
	exit 2;
};
docker run -v "$(pwd)/${PACKAGE_NAME}":/home/builder/package -it andyshinn/alpine-abuild:edge checksum sanitycheck deps fetch unpack build
git checkout -b h1-cli-update origin/master;
git commit -m "${PACKAGE_NAME}: Upgrade to ${NEW_VERSION}" testing/h1-cli/APKBUILD;
git push fork h1-cli-update --force;
popd;
rm aports -r -f;
