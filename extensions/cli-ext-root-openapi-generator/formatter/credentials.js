import { sha512crypt } from 'sha512crypt-node';
import { md, util, random } from 'node-forge';

const sha1 = data => md.sha1.create().update(data).digest();
const md5 = data => md.md5.create().update(data).digest();

const converter = {
    sha512: text => {
        const salt = random.getBytesSync(8);
        const hash = md.sha512
            .create()
            .update(salt)
            .update(text)
            .digest()
            .bytes()
            ;
        return `${util.encode64(salt)} ${util.encode64(hash)}`;
    },
    mysql: text => sha1(sha1(text).bytes()).toHex(),
    postgres: (text, resourceId) => md5(`${text}${resourceId}`).toHex(),
    unix: text => {
        const salt = Math.random().toString(36).slice(-8);
        return sha512crypt(text, salt);
    },
};

export default {
    afterRenderBody: (requestBody) => {
        console.log({requestBody});
        return requestBody;
    },
};
