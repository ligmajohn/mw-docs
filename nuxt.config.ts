export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/docs/favicon.ico' }],
    },
  },
});
