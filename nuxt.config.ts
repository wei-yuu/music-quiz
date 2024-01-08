// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  typescript: {
    typeCheck: true,
  },
  css: ['material-symbols/rounded.css'],
  ssr: false,
  // Pinia
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      // import { defineStore } from 'pinia'
      'defineStore',
      // import { defineStore as definePiniaStore } from 'pinia'
      ['defineStore', 'definePiniaStore'],
    ],
  },
  runtimeConfig: {
    public: {
      kkboxGrantType: '',
      kkboxClientID: '',
      kkboxClientSecret: '',
      kkboxAPI: '',
      corsProxyAPI: '',
    },
  },
});
