// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-svgo", "@nuxt/image"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  },
  svgo: {
    autoImportPath: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: "en", style: "background-color: black;" },
      title: "a.ni.me",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { name: "author", content: "Waradu" },
        {
          hid: "description",
          name: "description",
          content:
            "Can't keep up with all the anime you've watched? Neither can we! Organize your list, hide the for research purpose ones and keep things under control. We won't tell.",
        },
        {
          property: "og:title",
          content: "a.ni.me",
        },
        {
          property: "og:description",
          content:
            "Can't keep up with all the anime you've watched? Neither can we! Organize your list, hide the for research purpose ones and keep things under control. We won't tell.",
        },
        {
          property: "og:image",
          content: "/icon.png",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://a.ni.me.waradu.dev",
        },
      ],
    },
  },
  ssr: false
});
