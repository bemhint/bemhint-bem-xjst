#!/usr/bin/env bash

set -e

if [ -d "../bem-xjst" ]; then
    LINTER_DIR="../bem-xjst/migration"
else
    LINTER_DIR="node_modules/bem-xjst/migration"
fi

cd $LINTER_DIR && npm install --production
