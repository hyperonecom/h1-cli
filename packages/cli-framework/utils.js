
export const resolvePointer = (data, path) => {
    let pos = data;
    path.split('/').slice(1).forEach(x => {
        pos = pos && x in pos ? pos[x] : undefined;
    });
    return pos;
};

export const serializeValue = (value) => {
    if (typeof value === 'object') {
        return Object
            .entries(value)
            .filter(([, value]) => !!value)
            .map(([name, value]) => `${name}=${value}`)
            .join(',');
    }
    return value;
};
