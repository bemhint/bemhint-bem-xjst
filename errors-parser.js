const _ = require('lodash');

exports.parse = (str) => {
    return splitBy('BEM-XJST WARNING:\n', str)
        .map((err) => createError(splitBy('>>>>', err)));
};

/**
 *
 * @param {String} pattern
 * @param {String} str
 * @returns {String[]}
 */
function splitBy(pattern, str) {
    return _(str)
        .split(pattern)
        .invokeMap('trim')
        .compact()
        .value();
}

function createError(arr) {
    return {
        value: arr[0],
        location: parseLocation(arr[1])
    };
}

function parseLocation(str) {
    const match = str.match(/:([0-9]+):([0-9]+)$/);

    return {line: Number(match[1]), column: Number(match[2])};
}
