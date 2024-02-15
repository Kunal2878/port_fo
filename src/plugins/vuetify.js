/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// // Composables
 import { createVuetify } from 'vuetify'

// // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  ssr: true,
  contextIsolation:false,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          Tert:'#10002b',
          f:'#000000',
          trans:'#FFFFFF00',
          g:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(52, 179, 241,0.5))'
        },
      },
    },
  },
})
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


