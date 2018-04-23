module.exports = {
  modules: ["@nuxtjs/axios"],

  axios: {
    // proxyHeaders: false
    // baseURL: "https://intempio-api-prod.herokuapp.com",
    baseURL: "https://intempio-api-staging.herokuapp.com",
    // baseURL: "http://localhost:8000"
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  /*
  ** Global CSS
  */
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/index.css",
    "~/css/main.css"
  ],

  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: ["@/plugins/element-ui"],
  /*
  ** Headers of the page
  */
  head: {
    title: "Intempio",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: "Intempio Portal"},
      {name: "msapplication-TileColor", content: "#ffffff"},
      {name: "msapplication-TileImage", content: "/ms-icon-144x144.png"},
      {name: "theme-color", content: "#ffffff"}
    ],
    link: [
      {rel: "apple-touch-icon", sizes: "57x57", href: "/favicon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: "/favicon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: "/favicon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "76x76", href: "/favicon-76x76.png"},
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {rel: "manifest", href: "/manifest.json"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: "#3B8070"},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
