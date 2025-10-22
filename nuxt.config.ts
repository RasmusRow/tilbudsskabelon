import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/prismic"
  ],

  runtimeConfig: {
    public: {
      siteUrl: "https://tilbudsskabelon.dk",
    },
  },

  head: {
    title: "GRATIS tilbudsskabelon til håndværkere og freelancere",
    htmlAttrs: {
      lang: "da",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Tilbudsskabelon.dk er en brugervenlig platform, der hjælper virksomheder med hurtigt og nemt at generere professionelle tilbud.",
      },
      {
        name: "keywords",
        content:
          "tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon",
      },
      { name: "author", content: "Tilbudsskabelon Team" },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content: "Tilbudsskabelon.dk - Generer tilbud hurtigt og nemt",
      },
      {
        property: "og:description",
        content:
          "Med Tilbudsskabelon.dk kan du nemt generere professionelle tilbud til dine kunder.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tilbudsskabelon.dk" },
      { property: "og:image", content: "/images/seo-cover.png" },
      { property: "og:locale", content: "da_DK" },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:title",
        content: "Tilbudsskabelon.dk - Generer tilbud hurtigt og nemt",
      },
      {
        property: "twitter:description",
        content: "Generer professionelle tilbud til dine kunder på ingen tid.",
      },
      { property: "twitter:image", content: "/images/seo-cover.png" },
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-KYEV6WW3GJ",
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KYEV6WW3GJ');
        `,
        type: "text/javascript",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  image: {
    domains: ["tilbudsskabelon.dk"],
  },

  sitemap: {
    hostname: "https://tilbudsskabelon.dk", // Use hostname instead of url
    gzip: true,
    routes: ["/", "/om-os", "/priser", "/kontakt"],
  },

  robots: {
    UserAgent: "*",
    Disallow: "/admin",
    Sitemap: "https://tilbudsskabelon.dk/sitemap.xml",
  },

  pwa: {
    meta: {
      title: "Tilbudsskabelon.dk",
      author: "Tilbudsskabelon Team",
    },
    manifest: {
      name: "Tilbudsskabelon.dk",
      short_name: "Tilbudsskabelon",
      lang: "da",
    },
  },

  site: {
    url: "https://tilbudsskabelon.dk",
  },

  ssr: true,

  axios: {
    baseURL: "/",
  },

  generate: {
    fallback: true,
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid'
        },
        {
          type: 'guide',
          path: '/tips-og-gode-raad/:uid'
        }
      ]
    }
  },

  // Auto-import Prismic Vue components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ]
});