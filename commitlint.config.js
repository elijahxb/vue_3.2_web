module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: [
        2,
        'always',
        [
            'feat',
            'fix',
            'docs',
            'style',
            'refactor',
            'perf',
            'test',
            'chore',
            'revert',
            'build'
        ]
    ],
    'subject-case': [0]
}
