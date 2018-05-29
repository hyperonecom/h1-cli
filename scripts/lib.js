const getCommandHeader = (entry, prefix) => {
    const field = [];
    if (entry.options) {
        field.push(...Object.entries(entry.options).map(([name, value]) => {
            if (value.required) {
                return `--${name} ${name.toUpperCase()}`
            }
            return `[--${name} ${name.toUpperCase()}]`
        }))
    }
    if (entry.params) {
        field.push(...Object.entries(entry.params).map(([name, value]) => {
            if (value.required) {
                return `${name}`
            }
            return `[${name}]`
        }))
    }
    const field_help = field.join(' ');
    return `${prefix} ${entry.name} | ${field_help}`;
};

module.exports.getCommandHeader = getCommandHeader;
