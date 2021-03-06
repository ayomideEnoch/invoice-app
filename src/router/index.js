import { createWebHistory, createRouter } from "vue-router";
import invoiceList from "@/views/InvoiceList";
import invoiceShow from "@/views/InvoiceShow";
import invoiceEdit from "@/views/InvoiceEdit";
import invoiceCreate from "@/views/InvoiceCreate";

const routes = [
  {
    path: "/",
    name: "invoiceList",
    component: invoiceList,
  },
  {
    path: "/invoiceShow",
    name: "invoiceShow",
    component: invoiceShow,
  },
  {
    path: "/invoiceEdit",
    name: "invoiceEdit",
    component: invoiceEdit,
  },
  {
    path: "/invoiceCreate",
    name: "invoiceCreate",
    component: invoiceCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;