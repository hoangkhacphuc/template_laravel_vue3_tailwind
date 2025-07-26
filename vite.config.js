import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import path from 'path';
import { resolve } from 'node:path';

dotenv.config();
export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ["resources/js/main.js"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@images': path.resolve(__dirname, './resources/js/assets/images'),
        },
    },
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
        cors: {
            origin: (origin, callback) => {
                const allowedOrigin = process.env.VITE_APP_URL;
                if (!origin || origin === allowedOrigin) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
            allowedHeaders: ["Content-Type", "Authorization"],
        },
    },
});
