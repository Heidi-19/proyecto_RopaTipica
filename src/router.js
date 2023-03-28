import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Carrito from "./Carrito.vue"
import Venta from "./Venta.vue"

const routes = [
    {
        name: 'list',
        path: '/menu',
        component: App
    },
    {
        name: 'carrito',
        path: '/Carrito',
        component: Carrito
    },
    {
        name: 'venta',
        path: '/Venta',
        component: Venta
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
