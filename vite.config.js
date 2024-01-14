import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@images': path.resolve(__dirname, './src/assets/images'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@models': path.resolve(__dirname, './src/models'),
            '@config': path.resolve(__dirname, './src/config'),
            '@api': path.resolve(__dirname, './src/api'),
            '@slices': path.resolve(__dirname, './src/slices'),
            '@app': path.resolve(__dirname, './src/app'),
            "@redux": path.resolve(__dirname, './src/redux'),
            '@components': path.resolve(__dirname, './src/components'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
        },
    },
    server: {
        port: 3000
        // host: true,
        // http: {
        //   maxSessionMemory: 100
        // }
    }
});