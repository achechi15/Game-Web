import { defineConfig } from "vite";

export default defineConfig({
    base: '/Game-Web',
    build: {
        minify: 'terser',
    },
});