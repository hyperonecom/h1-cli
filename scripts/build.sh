#!/bin/sh
set -eux
NODE_VERSION="12"

for scope in h1 rbx; do
	npx pkg -c ./package.json -t "node${NODE_VERSION}-linux" -o "./dist/${scope}" "./bin/${scope}";
	tar czf ./dist/${scope}-linux.tar.gz -C ./dist/ ${scope}
	rm ./dist/${scope}
	
	npx pkg -c ./package.json -t "node${NODE_VERSION}-macos" -o "./dist/${scope}" "./bin/${scope}";
	tar czf ./dist/${scope}-macos.tar.gz -C ./dist/ ${scope}
	rm ./dist/${scope}

	npx pkg -c ./package.json -t "node${NODE_VERSION}-win" -o "./dist/${scope}.exe" "./bin/${scope}";
	zip -j ./dist/${scope}-win.zip ./dist/${scope}.exe
	rm ./dist/${scope}.exe

	docker run -v $(pwd):/src -w /src "node:${NODE_VERSION}-alpine" npx pkg -c ./package.json -t "node${NODE_VERSION}-alpine" -o "./dist/${scope}" "./bin/${scope}";
	tar czf ./dist/${scope}-alpine.tar.gz -C ./dist/ ${scope}
	rm -f ./dist/${scope}
done;
