
import { buildCli } from '@hyperone/cli-core';
import BrowserDevice from './device';

// Workaround until following pull requests are merged:
// https://github.com/75lb/table-layout/pull/10
process.stdout = { columns: undefined, rows: undefined };
process.stderr = { columns: undefined, rows: undefined };

export {
    buildCli,
    BrowserDevice,
};
