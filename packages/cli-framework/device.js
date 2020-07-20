/* eslint-disable no-console */

class Device {
    async displayResult(result) {
        console.log(result);
    }
    async displayError(err) {
        console.error(err);
    }
    async configLoad() {
        return {};
    }
    async configSave(/*content*/) {
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

