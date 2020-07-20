/* eslint-disable no-console */

import openapi from '../lib/openapi';
const normalize = (value) => String(value).replace('\n', '\\n');

const main = async () => {
    await openapi.init();
    console.log('| endpoint | method | location | field       | value |');
    console.log('| -------- | ------ | -------- | ----------- | ----- |');
    for (const [endpoint, pathItem] of Object.entries(openapi.spec.paths)) {
        for (const [method, operation] of Object.entries(pathItem)) {
            console.log(`| ${endpoint} | ${method} | operation | summary | ${normalize(operation.summary)} | `);
            console.log(`| ${endpoint} | ${method} | operation | description | ${normalize(operation.description)} | `);
            const schema = openapi.getSchema(operation);
            if (!schema) {
                console.log(`| ${endpoint} | ${method} | body | NA | (missing schema) | `);
            } else if (!schema.properties) {
                console.log(`| ${endpoint} | ${method} | body | NA | (missing properties) |`);
            } else {
                for (const [pname, pvalue] of Object.entries(schema.properties)) {
                    console.log(`| ${endpoint} | ${method} | body/${pname} | description | ${normalize(pvalue.description)} | `);
                }
                for (const [pname, pvalue] of Object.entries(schema.properties)) {
                    console.log(`| ${endpoint} | ${method} | body/${pname} | title | ${normalize(pvalue.title)} | `);
                }
            }
            for (const parameter of operation.parameters || []) {
                console.log(`| ${endpoint} | ${method} | ${parameter.in}/${parameter.name} | description | ${normalize(parameter.description)} | `);
            }
        }

    }
};

main().catch(console.error);

