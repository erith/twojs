import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/app.ts',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'iife',
            name: 'wafermap'
        },
        {
            file: 'dist/bundle.esm.mjs',
            format: 'esm',
            sourcemap: true
        }
    ],
    name:'wafermap',
    plugins: [
        peerDepsExternal(),
        copy(
            {
                targets: [{ src: 'src/index.html', dest: 'dist' }]
            }
        ),
        resolve({
            // jsnext: true,
            // main: true,
            // module: true,
            browser: true
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        image(),
        babel({
            exclude: "node_modules/**", // only transpile our source code
            babelHelpers: 'bundled'
         })
    ],
    moduleName: 'wafermap'
};