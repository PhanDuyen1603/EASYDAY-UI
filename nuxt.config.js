const webpack = require('webpack')

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - EasyDay',
        htmlAttrs: {
            lang: 'vi'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/_bootstrap.css',
        '@/assets/css/_app.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
    server: {
        port: process.env.PORT, // default: 3000
        host: '0.0.0.0', // default: localhost,
        timing: false
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        ],
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        filenames: {
            chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
        }
    },
    plugins: [
        { src: '~/plugins/jquery.min.js', ssr: false },
    ],
}