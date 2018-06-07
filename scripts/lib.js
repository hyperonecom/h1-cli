const getParamLabel = ([name, value]) => {
    if (value.required) {
        return `${name}`
    }
    return `[${name}]`
};

const getOptionLabel = ([name, value]) => {
    let label = `--${name} ${name.toUpperCase()}`;
    if(name === 'value'){
        console.log(value);
    }
    // console.log(value.action);
    if (value.action === 'append'){
        label = `${label} [${label} ...]`
    }
    if (!value.required) {
        label = `[${label}]`
    }
    return label
};



const getCommandHeader = (entry, prefix) => {
    const field = [];
    if (entry.options) {
        field.push(...Object.entries(entry.options).map(getOptionLabel))
    }
    if (entry.params) {
        field.push(...Object.entries(entry.params).map(getParamLabel));
    }
    const field_help = field.join(' ');
    return `${prefix} ${entry.name} | ${field_help}`;
};

module.exports.getCommandHeader = getCommandHeader;
