import fs from 'fs';
import os from 'os';
import { CliError } from '@hyperone/cli-framework/error';

const url = 'https://api.github.com/repos/hyperonecom/h1-cli/releases';

export const getRelease = async (http, prerelease = false) => {
    const resp = await http.get(url, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
    });
    return resp.bodyJson.find(x => prerelease || !x.prerelease);
};

export const getFlavour = async () => {
    if (os.platform() === 'win32') {
        return 'win';
    }
    if (os.platform() === 'linux') {
        try {
            const content = await fs.promises.readFile('/etc/os-release', { encoding: 'utf-8' });
            if (content.includes('alpine')) {
                return 'alpine';
            }
        } catch (err) {

        }
        return 'linux';
    }
    if (os.platform() === 'darwin') {
        return 'macos';
    }
    throw new CliError('Unable to determine CLI flavour');
};
