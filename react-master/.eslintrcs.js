module.exports = {
  'root': true,
  'extends': ['react-app'],
  'parser': 'babel-eslint',
  'extends': ['google', 'eslint:recommended', 'plugin:react/recommended'],
  'plugins': ['require-jsdoc-except', 'class-property', 'react', 'jest'],
  'ignorePatterns': ['*/**/react-native/*.js'],
  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  'env': {
    'jest': true,
  },
  'globals': {
    window: true,
    esri: true,
    alert: true,
    localStorage: true,
    document: true,
    navigator: true,
    console: true,
    setTimeout: true,
    __dirname: true,
    module: true,
    require: true,
    Promise: true,
  },
  'rules': {
    "eqeqeq": [0, 'never'],
    "eol-last": "warn",
    "key-spacing": "warn",
    quotes: [1, "single"],
    "no-unused-vars": "warn",
    "space-before-function-paren": ["warn", "always"],
    "no-trailing-spaces": "warn",
    "indent": [1, 2, {"SwitchCase": 1}],
    "comma-style": "warn",
    'no-console': ['error', {allow: ['warn', 'error', 'log']}],
    'strict': 0,
    'no-invalid-this': 0,
    'new-cap': ['error', {'capIsNew': false}],
    'camelcase': 0,
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'max-len': [1, {code: 300, tabWidth: 4, ignoreUrls: true}],
    'semi': [0, 'never'],
    'react/prop-types': [0],
    'linebreak-style': [
      0,
      require('os').EOL === '\r\n' ? 'windows' : 'unix',
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
  },
};
