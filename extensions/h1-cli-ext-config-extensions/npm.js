'use strict';

module.exports = (http, baseUri) => {
    const api = {};

    api.get = (uri, params = {}) => http.get(`${baseUri}${uri}`, {query: params})

    api.listPackages = (text) => api.get(`-/v1/search`, {
        text: text, size: 20
    });

    api.listVersions = (name) => api.get(`-/package/${name}/dist-tags`);

    api.showPackage = (name, version = "latest") => 
        api.get(`${name}/${version}`)

    return api;
};