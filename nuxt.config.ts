export default defineNuxtConfig({
  devtools: { enabled: true },

  // 1. ATTIVIAMO IL MODULO DI TAILWIND
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Il mio sito',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Una landing page moderna e veloce progettata per convertire.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap' }
      ]
    }
  },

  compatibilityDate: '2024-04-03' 
})
  