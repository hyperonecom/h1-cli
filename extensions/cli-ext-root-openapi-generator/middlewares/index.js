import password from './password-unix.js';
import upload from './uri-upload.js';

const formats = {
    uri: upload,
    'password-unix': password,
};

export default formats;
