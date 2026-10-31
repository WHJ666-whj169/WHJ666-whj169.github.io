// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({site:"https://whj666-whj169.github.io",trailingSlash:"always",vite:{plugins:[tailwindcss()]}});

