import { defineConfig } from 'vite';

import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill';
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill';

import nodePolyfills from 'rollup-plugin-polyfill-node';
import replace from '@rollup/plugin-replace';

//https://medium.com/@ftaioli/using-node-js-builtin-modules-with-vite-6194737c2cd2
// You don't need to add this to deps, it's included by @esbuild-plugins/node-modules-polyfill
// import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'array-back': require.resolve('array-back').replace('/dist/index.js', ''),
            //https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
            stream: 'rollup-plugin-node-polyfills/polyfills/stream', //@aws-sdk/lib-storage
            https: 'rollup-plugin-node-polyfills/polyfills/http', //json-schema-ref-parser@9.0.9 (try to remove after update)
            http: 'rollup-plugin-node-polyfills/polyfills/http', //json-schema-ref-parser@9.0.9 (try to remove after update)
            // util: 'rollup-plugin-node-polyfills/polyfills/util',
            // process: 'rollup-plugin-node-polyfills/polyfills/process',
            os: 'rollup-plugin-node-polyfills/polyfills/os', //command-line-usage os.EOL
        },
    },
    define: {
        'process.platform': '"browser"', //json-schema-ref-parser@9.0.9 (try to remove after update)
        'process.version': '"1.0.0"', //jsonwebtoken
        'process.browser': 'true', //json-schema-ref-parser@9.0.9 (try to remove after update)
        'process.env.NODE_DEBUG': 'false', //util
        'process.argv': '[]', //command-line-args
        global: 'globalThis', //http polyfill && json-schema-ref-parser@9.0.9
        'process.nextTick': 'queueMicrotask', //http polyfill
    },
    //https://github.com/vitejs/vite/discussions/2785
    optimizeDeps: {
        esbuildOptions: {
            define: {
                'process.stdout.columns': 0, //table-layout@1.0.2 -> command-line-usage@6.1.3
                'process.stderr.columns': 0, //table-layout@1.0.2 -> command-line-usage@6.1.3
            },
            // Enable esbuild polyfill plugins
            plugins: [
                GlobalsPolyfills({
                    process: true, //json-schema-ref-parser@9.0.9 (try to remove after update)
                    buffer: false, //json-schema-ref-parser@9.0.9 (try to remove after update)
                }),
                NodeModulesPolyfills(),
            ],
        },
    },
    build: {
        minify: false,
        sourcemap: true,
        rollupOptions: {
            // https://rollupjs.org/guide/en/#big-list-of-options
            plugins: [
                replace({
                    'typeof module.exports': 'false', //ono -> json-schema-ref-parser@9.0.9 (try to remove after update)
                }),
                nodePolyfills(),
            ],
        },
    },
    server: {
        port: 8080,
        proxy: {
            '^/api/v2': {
                rewrite: (path) => path.replace(/^\/api/, ''),
                target: 'https://api.hyperone.com',
                ws: true,
                changeOrigin: true,
            },
        },
    },
});

