'use strict';

const path = require('path');
const cp = require('child_process');
const Promise = require('bluebird');
const errorsParser = require('./errors-parser');

const LINTER_PATH = './migration/lib/index.js';
const LINTER_CWD = path.dirname(require.resolve('bem-xjst'));

module.exports = {
    configure: () => ({
        techs: {
            'bemhtml.js': true
        },
        lint: true,
        from: 0,
        to: 8
    }),

    forEachTech: (tech, entity, config) => {
        const conf = config.getConfig();
        const args = ['--input', tech.path, '--from', conf.from, '--to', conf.to];

        conf.lint && args.push('--lint');

        return new Promise((resolve) => {
            cp.execFile(LINTER_PATH, args, {cwd: LINTER_CWD}, (error, stdout, stderr) => {
                errorsParser.parse(stderr).forEach((err) => {
                    entity.addError({
                        msg: 'bem-xjst error',
                        value: err.value,
                        tech: tech.name,
                        location: err.location
                    });
                });
                resolve();
            });
        });
    }
};
