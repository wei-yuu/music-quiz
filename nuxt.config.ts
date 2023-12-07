// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  typescript: {
    typeCheck: true,
  },
  ssr: false,
  // Pinia
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      // import { defineStore } from 'pinia'
      "defineStore",
      // import { defineStore as definePiniaStore } from 'pinia'
      ["defineStore", "definePiniaStore"],
    ],
  },
  runtimeConfig: {
    kkboxGrantType: process.env.KKBOX_GRANT_TYPE,
    kkboxClientID: process.env.KKBOX_CLIENT_ID,
    kkboxClientSecret: process.env.KKBOX_CLIENT_SECRET,
    baseURL: process.env.KKBOX_API
  }
});
