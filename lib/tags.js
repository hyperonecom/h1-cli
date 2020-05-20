'use strict';

module.exports = {
    createTagObject: (values) => {
        const result = [];
        (values || []).forEach(tag => {
            const [name, value] = tag.split('=');
            result.push({name, value: value || ''});
        });
        return result;
    },
};
