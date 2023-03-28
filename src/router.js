import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"

const routes = [
    {
        name: 'list',
        path: '/menu',
        component: App
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
