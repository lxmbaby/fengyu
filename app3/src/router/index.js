import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/page/layout.vue";
import Login from "@/components/page/login.vue";
import Rejister from "@/components/page/register.vue";
import Firstpage from "@/components/firstnav/firstpage.vue";
const routes = [
  {
    path: "/",
    redirect: "/firstpage",
    name: "Layout",
    component: Layout,
    children: [{ path: "firstpage", name: "Firstpage", component: Firstpage }],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Rejister,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
