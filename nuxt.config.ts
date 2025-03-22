// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: [
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        '@nuxt/fonts',
        '@vueuse/nuxt',
        'dayjs-nuxt',
    ],

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
        bundle: {
            optimizeTranslationDirective: false,
        },
        vueI18n: './i18n.config.ts',
        locales: [
            { code: 'id', language: 'id-ID' },
            { code: 'en', language: 'en-US' },
        ],
    },

    fonts: {
        families: [
            { name: 'Inter', provider: 'google' },
            { name: 'Libre Baskerville', provider: 'google' },
            { name: 'Lato', provider: 'google' },
        ],
    },

    dayjs: {
        locales: ['id', 'en'],
        plugins: ['relativeTime', 'utc', 'timezone'],
        defaultLocale: 'id',
        defaultTimezone: 'Asia/Jakarta',
    },
});
