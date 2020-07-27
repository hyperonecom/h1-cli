

export default (http, baseUri) => {
    const api = {};

    api.get = (uri, params = {}) => http.get(`${baseUri}${uri}`, { query: params });

    api.listPackages = (text) => api.get('-/v1/search', {
        text,
        size: 50,
    });

    api.listVersions = (name) => api.get(`-/package/${name}/dist-tags`);

    api.showPackage = async (name, version) => {
        const result = await api.get(`${encodeURIComponent(name)}`);
        if (version) {
            return result.versions[version];
        }
        return result;
    };

    return api;
};
