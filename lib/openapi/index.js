'use strict';
const {pickBy} = require('lodash');
const schema = require('./schema.json');

const getResourcePaths = (resource) => pickBy(schema.paths, (value, key) => key.startsWith(`/${resource.apiName || resource.name}`));

const getResourceComponents = (resource) => pickBy(schema.components.schemas, (value, key) => key.startsWith(`${resource.apiName || resource.name}_`));

const getSimpleActionsNames = (resource) => Object.entries(getResourcePaths(resource))
    .filter(([key, value]) => {
        const name = resource.apiName || resource.name;
        if (!value) return false;
        if (!value.post) return false;
        if (!key.startsWith(`/${name}/{${name}Id}/actions/`)) return false;
        if (!value.post.requestBody || value.post.requestBody.required === false) {
            return true;
        }
    })
    .map(([key]) => key.split('/').slice(-1)[0]);

module.exports = {
    getResourcePaths,
    getSimpleActionsNames,
    getResourceComponents,
};

