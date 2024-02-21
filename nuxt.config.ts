// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [
    require("tailwindcss"),
    // ...
  ],
  devtools: { enabled: false },
});
