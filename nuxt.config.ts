// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        'dayjs-nuxt',
        '@formkit/auto-animate/nuxt',
        '@nuxtjs/color-mode',
        '@hebilicious/vue-query-nuxt',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
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
        vueI18n: './i18n.config.ts',
        defaultLocale: 'id',
        bundle: {
            optimizeTranslationDirective: false,
        },
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

    image: {
        presets: {
            avatar: {
                modifiers: {
                    format: 'webp',
                    width: 50,
                    height: 50,
                    fit: 'cover',
                    quality: 50,
                },
            },
        },
        quality: 80,
        format: ['webp'],
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536,
        },
        densities: [1, 2],
    },

    icon: {
        class: 'icon',
        mode: 'css',
        componentName: 'NuxtIcon',
        customCollections: [
            {
                prefix: 'app',
                dir: './assets/icons',
            },
        ],
    },

    tailwindcss: {
        cssPath: '~/styles/main.scss',
        configPath: 'tailwind.config',
        exposeConfig: false,
        viewer: true,
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
            extensions: ['vue'],
        },
    ],

    shadcn: {
        prefix: 'V',
        componentDir: '~/components/base',
    },
});
