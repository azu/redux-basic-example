// LICENSE : MIT
"use strict";
import { rollup } from 'rollup';
import npm from 'rollup-plugin-npm';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

rollup({
    entry: 'src/index.js',
    plugins: [
        npm({
            jsnext: false,
            main: true,
            builtins: false
        }),
        babel({
            exclude: 'node_modules/**',
            sourceMap: true
        }),
        commonjs()
    ]
}).then(bundle => {
    bundle.write({dest: 'build/bundle.js', format: 'life'})
}).catch(error => console.error(error));