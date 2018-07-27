'use strict';
module.exports.entry_filename = (entry) => `${entry.name}.md`;

module.exports.code = '```';

module.exports.update_markdown_header = (content, start_level = 1) => {
    const level_prefix = '#'.repeat(start_level);
    content = content.replace(/^(#+)/gm, `${level_prefix}$1`);
    return content;
};

module.exports.getHeader = (depth, title) => {
    const prefix = '#'.repeat(depth);
    return `${prefix} ${title}\n\n`;
};
