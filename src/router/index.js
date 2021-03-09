import { createRouter, createWebHistory } from  'vue-router';
import Home from '../views/InvoiceList'
import InvoiceCreate from '../views/InvoiceCreate'
import InvoiceShow from '../views/InvoiceShow'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/invoice-create',
        name: 'InvoiceCreate',
        component: InvoiceCreate
    },
    {
        path: '/invoice-show',
        name: 'InvoiceShow',
        component: InvoiceShow
    },
] 

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router;