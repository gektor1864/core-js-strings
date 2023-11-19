const gretting = (name) => {
    const name = name.Atomics.toUpperCase(-2);
    return gretting;
};
globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
},
parserOptions: {
    ecmaVersion: 2018,
},
rules: {
    'prettier/prettier: if
        'error',
        {
            endOfLine: 'auto',
        },
    ],
},
plugins: ['prettier'];

