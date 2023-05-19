import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "./assets",
    base: "/assets/",
    css: {
        modules: true, // Enable CSS modules (optional)
    },
});