
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      { rel: "stylesheet", href: "/assets/css/custom.css" },
    ],
    script: [
      { src: "/assets/plugins/mediabox/mediabox.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f77ade',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/pdf.js', ssr: false },
    '~/plugins/echarts',
    { src:"~/plugins/particle.js",ssr:false},
],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.output.globalObject = 'this'
      config.module.rules.push(
        {
          test: /\.pdf$/,
          loader: 'url-loader'
        }
      )
    }
  },
  server: {
    port: 3000, // 默认: 3000
    host: '127.0.0.1' // 默认: localhost,
  }
}
