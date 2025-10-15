import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        host: 'laratest.loc',
        port: 5175,
        strictPort: true,
        origin: 'http://laratest.loc:5175',
        cors: true,
        hmr: {
            port: 5175,
            host: 'localhost',
        }
    },
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            refresh: true,
        }),
        tailwindcss(),
    ],
});
