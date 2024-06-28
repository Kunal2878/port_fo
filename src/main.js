import App from './App.vue'


import { createApp } from 'vue'
import { store } from './store'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)

  app.use(store);

 


// In your main.js file
// import cors from 'cors';

// app.use(cors({
//   origin: true,
// }));

app.mount('#app')
