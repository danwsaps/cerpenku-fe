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
        'motion-v/nuxt',
        '@vee-validate/nuxt',
    ],

    vite: {
        define: {
            'import.meta.env.NUXT_MAIL_KEY': JSON.stringify(import.meta.env.NUXT_PUBLIC_MAIL_KEY),
            'import.meta.env.NUXT_EMAIL_URL': JSON.stringify(import.meta.env.NUXT_PUBLIC_EMAIL_URL),
            'import.meta.env.API_BASE_PATH': JSON.stringify(import.meta.env.NUXT_PUBLIC_API_BASE_PATH),
            'import.meta.env.SITE_URL': JSON.stringify(import.meta.env.NUXT_PUBLIC_SITE_URL),
            'import.meta.env.FIREBASE_API_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_API_ID),
            'import.meta.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
            'import.meta.env.FIREBASE_PROJECT_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID),
            'import.meta.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
            'import.meta.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
            'import.meta.env.FIREBASE_APP_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_APP_ID),
        },
    },

    nitro: {
        compressPublicAssets: true,
    },

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
        clientBundle: {
            scan: true,
            includeCustomCollections: true,
            sizeLimitKb: 0,
        },
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

    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: 'VLibFormForm',
            Field: 'VLibFormField',
            FieldArray: 'VLibFormFieldArray',
            ErrorMessage: 'VLibFormErrorMessage',
        },
    },
});
