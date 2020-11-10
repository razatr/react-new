module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
        indent: [ 2, 4 ],
        semi: [ 2, 'never' ],
        'react/display-name': 0,
        quotes: [ 2, 'single' ],
        eqeqeq: 2,
        'object-curly-spacing': [ 2, 'always' ],
        'array-bracket-spacing': [ 2, 'always' ],
        'react/prop-types': 0,
        'react/no-children-prop': 0,
        'comma-dangle': 2,
        'react/jsx-curly-spacing': [ 2 , { 'when': 'always' } ]
    }
}
