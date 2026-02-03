import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    server: {
        host: true, // Listen on all local IPs
        port: 8080,
        watch: {
            usePolling: true // Needed for Docker on Windows potentially, but Vite is usually good
        }
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'node_modules'),
            '@': path.resolve(__dirname, 'assets'),
        }
    }
});
