module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'no-empty': 'warn',
        'no-extra-semi': 'warn',
        'no-unexpected-multiline': 'warn',
        'default-case': 'error',
        'default-case-last': 'error',
        'no-alert': 'warn',
        'no-empty-function': 'warn',
        'no-invalid-this': 'warn',
        'no-useless-catch': 'warn',
        'require-await': 'error',
        'quotes': ['warn', 'single'],
        'no-async-promise-executor': 'off'
    }
}
