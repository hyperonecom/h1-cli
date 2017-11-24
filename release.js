'use strict';

const superagent = require('superagent');
const https = require('https');
const path = require('path');
const fs = require('fs');

const distPath = path.join(__dirname, 'dist');

const info = require('./package.json');

const upload = (releaseId, filePath, name) => new Promise((resolve, reject) => {
    console.log('uploading...', name);

    const stat = fs.statSync(filePath);

    const stream = fs.createReadStream(filePath);

    const options = {
        hostname: 'uploads.github.com'
      , method: 'POST'
      , path: `/repos/hyperonecom/h1-cli/releases/${releaseId}/assets?name=${name}`
      , headers: {
            'Authorization': `token ${process.env.GH_TOKEN}`
          , 'Content-Type': 'application/octet-stream'
          , 'Content-Length': stat.size
        }
    };

    const req = https.request(options, res => {
        // console.log('STATUS', res.statusCode);
        // console.log('HEADERS', res.headers);

        if (res.statusCode !== 201) {
            return reject(res.statusCode);
        }

        let data = '';
        res.setEncoding('utf8');
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
    });

    req.on('error', reject);

    stream.pipe(req);
});

superagent
    .post('https://api.github.com/repos/hyperonecom/h1-cli/releases')
    .set('Authorization', `token ${process.env.GH_TOKEN}`)
    .send({
        tag_name: `v${info.version}`
      , target_commitish: 'master'
      , name: `v${info.version}`
      , body: 'Description of the release'
      , draft: true
      , prerelease: false
    })
    .end((err, rsp) => {
        if (err) { throw err; }

        const release = rsp.body;

        console.log(release);

        let p = Promise.resolve();

        fs.readdirSync(distPath).forEach(fileName => {
            const filePath = path.join(distPath, fileName);
            p = p.then(() => upload(release.id, filePath, fileName));
        });

        p.then(() => console.log('done'));
    });
