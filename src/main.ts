// Import our custom CSS
import './scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import all of Bootstrap’s JS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
