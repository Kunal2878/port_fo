import App from './App.vue'


import { createApp } from 'vue'
import { store } from './store'
import cors from 'cors'
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
// const pinia = createPinia()

// const Client_Id="148724204917-dpgah2sm4sdv5i9hqsbt5ceg8628h08o.apps.googleusercontent.com"
registerPlugins(app)
// app.use(vue3GoogleLogin, {
//     clientId:"148724204917-dpgah2sm4sdv5i9hqsbt5ceg8628h08o.apps.googleusercontent.com",
//     scope: 'email',
//     prompt: 'select_account',
//   })
  app.use(store);
  // app.use(VueTelInput);
 


// In your main.js file
// import cors from 'cors';

app.use(cors({
  origin: true,
}));

app.mount('#app')
