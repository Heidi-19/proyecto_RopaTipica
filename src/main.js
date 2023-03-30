import { createApp } from 'vue'
import sesion from './perfil.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import router from './router'

import './assets/main.css'

const app = createApp(sesion)
app.use(router)

app.mount('#app')