import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },

  modules: ["@nuxt/icon"],
});