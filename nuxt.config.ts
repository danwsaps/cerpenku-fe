// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

    eslint: {
        config: {
            standalone: false,
        },
    },

    typescript: {
        strict: true,
        builder: 'vite',
        typeCheck: true,
    },

    devServer: {
        port: Number.parseInt(import.meta.env.NUXT_DEVELOPMENT_PORT ?? '8000', 10),
    },

    i18n: {
        vueI18n: './i18n.config.ts',
        locales: [
            { code: 'id', language: 'id-ID' },
            { code: 'en', language: 'en-US' },
        ],
    },
});
