# bemhint-bem-xjst [![Build Status](https://travis-ci.org/bemhint/bemhint-bem-xjst.svg)](https://travis-ci.org/bemhint/bemhint-bem-xjst)

Plugin for [bemhint](https://github.com/bemhint/bemhint) to check technologies based on [bem-xjst](https://github.com/bem/bem-xjst). It uses checks from `bem-xjst` [migration guide](https://github.com/bem/bem-xjst/tree/master/migration).

## How to install

```bash
$ npm install bemhint-xjst
```

## How to use

Add plugin for .bemhint.js

```js
module.exports = {
    plugins: {
        'bemhint-bem-xjst': {
            techs: {
                'bemhtml.js': true
            },
            lint: false,
            from: 0,
            to: 8
        }
    }
};
```

You can read more about `lint`, `from`, `to` options [here](https://github.com/bem/bem-xjst/tree/master/migration#static-linter-for-templates).
