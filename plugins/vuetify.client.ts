import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1976d2',
            secondary: '#424242',
            accent: '#82b1ff',
            error: '#ff5252',
            info: '#2196f3',
            success: '#4caf50',
            warning: '#ff9800',
          },
        },
        dark: {
          colors: {
            primary: '#2196f3',
            secondary: '#424242',
            accent: '#ff4081',
            error: '#ff5252',
            info: '#2196f3',
            success: '#4caf50',
            warning: '#ff9800',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
