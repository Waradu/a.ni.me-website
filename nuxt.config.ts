// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "motion-v/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/plausible",
    "nuxt-svgo",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],

  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
    viewer: true,
  },

  fonts: {
    provider: "bunny",
  },

  plausible: {
    ignoredHostnames: ["localhost", "127.0.0.1"],
    domain: "a.ni.me.waradu.dev",
    apiHost: "https://plausible.wireway.ch",
    autoOutboundTracking: true,
    proxy: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "A • NI • ME",
      titleTemplate: "",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { name: "author", content: "Waradu" },
        {
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

  svgo: {
    autoImportPath: false,
    defaultImport: "component",
    dts: true,
  },
});
