'use strict';

module.exports = {
    createTagObject: (values) => {
        const result = {};
        (values || []).forEach(tag => {
            const [key, value] = tag.split('=');
            result[key] = value || '';
        });
        return result;
    },
};
