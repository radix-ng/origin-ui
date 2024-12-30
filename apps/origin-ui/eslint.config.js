const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

module.exports = [
    ...baseConfig,
    ...nx.configs['flat/angular'],
    ...nx.configs['flat/angular-template'],
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': 0,
            '@angular-eslint/component-selector': 0
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
