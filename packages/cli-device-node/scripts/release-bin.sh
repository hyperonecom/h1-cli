#!/bin/sh
set -eux
NODE_VERSION="12"

for scope in h1; do
	npx pkg -t "node${NODE_VERSION}-linux" -o "./dist/${scope}" "./dist/${scope}.js";
	tar czf ./dist/${scope}-linux.tar.gz -C ./dist/ ${scope}
	rm ./dist/${scope}
	
	npx pkg -t "node${NODE_VERSION}-macos" -o "./dist/${scope}" "./dist/${scope}.js";
	tar czf ./dist/${scope}-macos.tar.gz -C ./dist/ ${scope}
	rm ./dist/${scope}

	npx pkg -t "node${NODE_VERSION}-win" -o "./dist/${scope}.exe" "./dist/${scope}.js";
	zip -j ./dist/${scope}-win.zip ./dist/${scope}.exe
	rm ./dist/${scope}.exe

	docker run -v $(pwd):/src -w /src "node:${NODE_VERSION}-alpine" npx pkg -t "node${NODE_VERSION}-alpine" -o "./dist/${scope}" "./dist/${scope}.js";
	tar czf ./dist/${scope}-alpine.tar.gz -C ./dist/ ${scope}
	docker run -v $(pwd):/src -w /src "node:${NODE_VERSION}-alpine" npx rm ./dist/${scope}
done;