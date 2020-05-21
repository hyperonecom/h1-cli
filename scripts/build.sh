#!/bin/sh
set -eux
NODE_VERSION="12"

# Pkg refuse to build that file due "Failed to make bytecode node12-x64"
# Temporary drop ES Module file because it's not used and not required
# See https://github.com/Azure/azure-sdk-for-js/pull/9060 for final solution
# NodeJS from version 13.2.0, a module mechanism has been introduced, but
# this still requires a declaration in package.json to take effect.
rm -f ./node_modules/@opencensus/web-types/build/src/index.js

for scope in h1 rbx; do
	npx pkg -c ./package.json -t "node${NODE_VERSION}-linux" -o "./dist/${scope}" "./bin/${scope}";
	npx pkg -c ./package.json -t "node${NODE_VERSION}-linux" -o "./dist/docker-credential-${scope}-login" "./bin/docker-credential-${scope}-login";
	tar czf ./dist/${scope}-linux.tar.gz -C ./dist/ ${scope} docker-credential-${scope}-login
	rm ./dist/${scope} ./dist/docker-credential-${scope}-login
	
	npx pkg -c ./package.json -t "node${NODE_VERSION}-macos" -o "./dist/${scope}" "./bin/${scope}";
	npx pkg -c ./package.json -t "node${NODE_VERSION}-macos" -o "./dist/docker-credential-${scope}-login" "./bin/docker-credential-${scope}-login";
	tar czf ./dist/${scope}-macos.tar.gz -C ./dist/ ${scope} docker-credential-${scope}-login
	rm ./dist/${scope} ./dist/docker-credential-${scope}-login

	npx pkg -c ./package.json -t "node${NODE_VERSION}-win" -o "./dist/${scope}.exe" "./bin/${scope}";
	zip -j ./dist/${scope}-win.zip ./dist/${scope}.exe
	rm ./dist/${scope}.exe

	docker run -v $(pwd):/src -w /src "node:${NODE_VERSION}-alpine" npx pkg -c ./package.json -t "node${NODE_VERSION}-alpine" -o "./dist/${scope}" "./bin/${scope}";
	npx pkg -c ./package.json -t "node${NODE_VERSION}-alpine" -o "./dist/docker-credential-${scope}-login" "./bin/docker-credential-${scope}-login";
	tar czf ./dist/${scope}-alpine.tar.gz -C ./dist/ ${scope} docker-credential-${scope}-login
	rm -f ./dist/${scope} ./dist/docker-credential-${scope}-login
done;
