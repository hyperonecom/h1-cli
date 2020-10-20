/* eslint-disable no-console */

class Device {
    getName() {
        return 'cli';
    }
    async displayResult(result) {
        console.log(result);
    }
    async displayError(err) {
        console.error(err);
    }
    async configLoad() {
        return {};
    }
    async configStore() {
        return;
    }
    async configGet(/* key, defaultValue */) {
        return /* value */;
    }
    async configSet(/* key, value */) {
        return;
    }
    async configUnset(/* key */) {
        return;
    }
    async headers() {
        return {};
    }
    log(...args) {
        console.log(...args);
    }
    debug(...args) {
        console.debug(...args);
    }
    async readPassportFile(/*filepath*/) {
        return;
    }
    async statFile(/*filepath*/) {
        return new Error('Local file operation is not supported');
    }
    createReadStream(/*filepath*/) {
        return new Error('Local file operation is not supported');
    }
    async readDefaultPassport() {
        return;
    }
    async importExtension(/*pattern*/) {
        return [];
    }
    mapUrl(url) {
        return url;
    }
    extensionDir() {
        return;
    }
}

export default Device;

