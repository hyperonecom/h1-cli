#!/bin/sh
set -eux
DOCKER_UID=$(id -u);
DOCKER_GID=$(id -g);
NODE_VERSION="12"

for scope in h1 rbx; do
	npx pkg -c ./package.json -t "node${NODE_VERSION}-linux" -o "./dist/${scope}-linux" "./bin/${scope}";
	npx pkg -c ./package.json -t "node${NODE_VERSION}-macos" -o "./dist/${scope}-macos" "./bin/${scope}";
	npx pkg -c ./package.json -t "node${NODE_VERSION}-win" -o "./dist/${scope}-win.exe" "./bin/${scope}";
	docker run -v $(pwd):/src -w /src "node:${NODE_VERSION}-alpine" npx pkg -c ./package.json -t "node${NODE_VERSION}-alpine" -o "./dist/${scope}-alpine" "./bin/${scope}";
done;
sudo chown "$DOCKER_UID:$DOCKER_GID" ./dist/*;
chmod +x ./dist/*;
