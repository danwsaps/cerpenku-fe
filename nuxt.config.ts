// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
      port: Number(process.env.NUXT_DEVELOPMENT_PORT) || 3000
  }
})
