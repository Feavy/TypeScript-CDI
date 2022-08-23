import { defineConfig } from 'vite';
import tsPlugin from '@rollup/plugin-typescript';
import transform from './processor/index';

export default defineConfig({
    plugins: [
        tsPlugin({
            transformers: {
                after: [
                    {
                        type: "program",
                        factory: (program) => {
                            return transform(program, {});
                        }
                    }
                ]
            },
            // typescript: ttypescript,
        }),
    ],
})