import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: [
        {
            format: 'esm',
            file: 'dist/index.esm.js',
        },
        {
            format: 'cjs',
            file: 'dist/index.cjs.js',
        },
    ],
    plugins: [
        nodeResolve(),
        vue(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'],
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue', '.svg'],
        }),
        commonjs(),
    ],
    external: ['vue'],
};
