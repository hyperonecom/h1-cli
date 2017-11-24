'use strict';

//https://gist.github.com/branneman/8048520
//hack to have requires relative to the app root
const path = require('path');

process.env.NODE_PATH = path.join(__dirname, '..');

require('module').Module._initPaths();
