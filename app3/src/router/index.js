import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/page/layout.vue";
import Login from "@/components/page/login.vue";
import Rejister from "@/components/page/register.vue";
import Firstpage from "@/components/firstnav/firstpage.vue";
import firstClass from "@/components/firstnav/firstClass.vue";
import secondClass from "@/components/firstnav/secondClass.vue";
const routes = [
  {
    path: "/",
    redirect: "/firstpage",
    name: "Layout",
    component: Layout,
    children: [
      { path: "firstpage", name: "Firstpage", component: Firstpage },
      {
        path: "firstClass/:id",
        name: "firstClass",
        component: firstClass,
        props: true,
      },
      {
        path: "secondClass/:id",
        name: "secondClass",
        component: secondClass,
        props: true,
      },
    ],
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
