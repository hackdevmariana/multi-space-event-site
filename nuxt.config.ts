// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Configuración de módulos
  modules: [
    '@nuxt/icon',
    '@sidebase/nuxt-auth',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],

  // Configuración de CSS
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  // Configuración de build
  build: {
    transpile: ['vuetify']
  },

  // Configuración de Vuetify
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";'
        }
      }
    }
  },

  // Configuración de PWA
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
    manifest: {
      name: 'Multi-Space Event Site',
      short_name: 'EventSite',
      description: 'Sitio web de eventos multi-espacio',
      theme_color: '#1976d2',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },

  // Configuración de auth
  auth: {
    baseURL: process.env.AUTH_ORIGIN || 'http://localhost:3000',
    provider: {
      type: 'authjs'
    }
  },

  // Configuración de content
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  // Configuración de image
  image: {
    provider: 'ipx',
    ipx: {
      modifiers: {
        format: 'webp'
      }
    }
  },

  // Configuración de runtime config
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  }
})