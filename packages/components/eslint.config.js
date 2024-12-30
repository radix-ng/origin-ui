const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

module.exports = [
    ...baseConfig,
    {
        files: ['**/*.json'],
        rules: {
            '@nx/dependency-checks': [
                'error',
                {
                    ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}']
                }
            ]
        },
        languageOptions: {
            parser: require('jsonc-eslint-parser')
        }
    },
    ...nx.configs['flat/angular'],
    ...nx.configs['flat/angular-template'],
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/component-class-suffix': 0,
            '@angular-eslint/directive-class-suffix': 0,
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'ori',
                    style: 'camelCase'
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'ori',
                    style: 'kebab-case'
                }
            ]
        }
    },
    {
        files: ['**/*.html'],
        // Override or add rules here
        rules: {}
    },
    {
        files: [
            '**/*.ts'
        ],
        rules: {
            '@angular-eslint/prefer-standalone': 'off'
        }
    }
];
