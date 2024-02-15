/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components

import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)
const Client_Id="148724204917-dpgah2sm4sdv5i9hqsbt5ceg8628h08o.apps.googleusercontent.com"
registerPlugins(app)
app.use(vue3GoogleLogin, {
    clientId:"148724204917-dpgah2sm4sdv5i9hqsbt5ceg8628h08o.apps.googleusercontent.com",
    scope: 'email',
    prompt: 'select_account',
  })
app.mount('#app')
