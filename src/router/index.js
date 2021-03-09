import { createRouter, createWebHistory } from  'vue-router';
import Home from '../views/InvoiceList'
import InvoiceCreate from '../views/InvoiceCreate'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'InvoiceCreate',
        component: InvoiceCreate
    },
] 

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router;