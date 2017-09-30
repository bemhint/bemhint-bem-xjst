'use strict';

const errorsParser = require('../errors-parser');
const fs = require('fs');


describe('errors-parser', () => {
    const read = (fixture) => fs.readFileSync(`./test/fixtures/${fixture}.txt`, 'utf8');

    it('should parse errors from stderr', () => {
        const stderr = read('stderr');

        assert.deepEqual(errorsParser.parse(stderr), [
            {
                value: 'Some error',
                location: {
                    line: 100500,
                    column: 500
                }
            },
            {
                value: 'Another error',
                location: {
                    line: 4444,
                    column: 55555
                }
            }
        ]);
    });
});
