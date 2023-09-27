module.exports = {
    env: {
      es2021: true,
      node: true
    },
    extends: 'standard',
    ignorePatterns: ['*.test.js'],
    overrides: [
      {
        env: {
          node: true
        },
        files: [
          '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parserOptions: {
      ecmaVersion: '2021',
      sourceType: 'module'
    },
    rules: {
      'arrow-spacing': [2, {
        before: true,
        after: true
      }],
      'block-spacing': [2, 'always'],

      camelcase: [0, {
        properties: 'always'
      }]

    }
  }
  