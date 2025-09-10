import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Importação do Font Awesome
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
document.head.appendChild(link)

const app = createApp(App)
app.use(router)
app.mount('#app')
