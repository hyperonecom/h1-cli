'use strict';

module.exports = {
    isNode: typeof process !== 'undefined' && process.release.name === 'node',
};
