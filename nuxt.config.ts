// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  typescript: {
      strict: true,
      builder: 'vite',
      typeCheck: true,
  },

  devServer: {
      port: Number.parseInt(import.meta.env.NUXT_DEVELOPMENT_PORT ?? '8000', 10)
  }
})
