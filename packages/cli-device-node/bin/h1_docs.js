/* eslint-disable no-console */
import docs from '../docs';

docs({
    openapiUrl: 'https://api.hyperone.com/v2/openapi.json',
    scope: 'h1',
}).catch(err => {
    console.log(err);
    process.exit(-1);
});
