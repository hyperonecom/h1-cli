#!/bin/sh
set -eux
NODE_VERSION="18"

for scope in h1; do
	npx pkg --public -t "node${NODE_VERSION}-linuxstatic" -o "./dist/${scope}" "./dist/${scope}.js";
	tar czf ./dist/${scope}-linux.tar.gz -C ./dist/ ${scope}
	rm ./dist/${scope}
	
	npx pkg --public -t "node${NODE_VERSION}-macos" -o "./dist/${scope}" "./dist/${scope}.js";
	tar czf ./dist/${scope}-macos.tar.gz -C ./dist/ ${scope}
	rm ./dist/${scope}

	npx pkg --public -t "node${NODE_VERSION}-win" -o "./dist/${scope}.exe" "./dist/${scope}.js";
	zip -j ./dist/${scope}-win.zip ./dist/${scope}.exe
	rm ./dist/${scope}.exe
done;