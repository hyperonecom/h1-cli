import { sha512crypt } from 'sha512crypt-node';
import { set } from '@hyperone/cli-core/lib/transform.js';

export default {
    name: 'password-unix',
    beforeRequest: async (requestBody, requestUrl, opts, options) => {
        const optsAll = opts._all || opts;

        for (const option of options) {
            const value = optsAll[option.name];
            if (!value) {
                continue;
            }

            if (option.use?.schema?.format === 'password-unix') {
                const salt = Math.random().toString(36).slice(-8);
                const newValue = sha512crypt(value, salt);
                set(requestBody, option.use.field.replace(/\//g, '.'), newValue);
            }
        }

        return requestBody;
    },
};
