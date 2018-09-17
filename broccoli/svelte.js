'use strict';

const Babel = require('broccoli-babel-transpiler');
const DEPRECATED_FEATURES = require('./deprecated-features');
const pkg = require('../package.json');

module.exports = function svelte(tree) {
  return new Babel(tree, {
    plugins: [
      [
        'debug-macros',
        {
          debugTools: {
            source: '@ember/debug',
            assertPredicateIndex: 1,
            isDebug: false,
          },
          svelte: {
            'ember-source': pkg.version,
          },
          flags: [
            {
              name: 'ember-source',
              source: '@ember/deprecated-features',
              flags: DEPRECATED_FEATURES,
            },
          ],
        },
      ],
    ],
  });
};
