/* eslint-disable no-console */
import docs from '../docs.js';

docs({
    openapiUrl: 'https://api.rootbox.com/v2/openapi.json',
    scope: 'rbx',
}).catch(err => {
    console.log(err);
    process.exit(-1);
});
