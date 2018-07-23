'use strict';

const superagent = require('superagent');

const average_line_length = 1600;
const chunk_size = average_line_length * 10;

const range_content = (url, range_start, range_end) => new Promise((resolve, reject) => {
    let content = '';

    superagent
        .get(url)
        .set('Range', `bytes=${range_start}-${range_end}`)
        .buffer(false)
        .on('response', (resp, err) => {
            if (err) reject(err);
            resp.on('data', chunk => {
                content = content + chunk;
            });
        })
        .on('end', () => {
            resolve(content);
        })
        .end();
});

exports.fetch_lines = async (url, size, line_count) => {
    let content = '';
    let range_end = size;
    let range_start = size - average_line_length * line_count;
    range_start = range_start > 0 ? range_start : 0;

    // Download data in chunk until the n-lines or the whole file are completed.
    for (; (!content || content.trimEnd().split('\n').length < line_count) && range_start > 0; range_start -= chunk_size) {
        const new_content = await range_content(url, range_start, range_end);
        content = new_content + content;
        range_end = range_start - 1;
    }

    // Rejects potentially incomplete lines
    if (range_start > 0) {
        content = content.substring(content.indexOf('\n'), content.length);
    }
    let lines = content.trimEnd().split('\n').filter(lines => !!lines);
    if (lines.length > line_count) {
        lines = lines.slice(lines.length - line_count);
    }
    return lines;
};
