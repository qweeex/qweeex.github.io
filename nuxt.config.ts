// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    css: [
      '@/assets/style/reset.scss',
      '@/assets/fonts/TT-Hoves/stylesheet.scss'
    ],
    imports: {
        autoImport: true
    },
    typescript: {
        strict: true
    },
})
