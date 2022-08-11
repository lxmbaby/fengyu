import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/page/login.vue";
import Main from "../components/page/Main.vue";
import Register from "../components/page/register.vue";
import Reset from "../components/page/reset.vue";
import Update from "../components/page/update.vue";
import shopUpdate from "../components/page/shopupdate.vue";
// 导入菜单组件
import User from "../components/menu/user.vue";
import ShopUser from "../components/menu/shopuser.vue";
import Power from "../components/menu/power.vue";
import Order from "../components/menu/order.vue";
import Setting from "../components/menu/setting.vue";
import Help from "../components/menu/help.vue";
//用户详情组件
import UserDetial from "../components/userDetial.vue";
import shopUserDetial from "../components/shopuserDetial.vue";
import orderDetial from "@/components/page/orderDetial.vue";
const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset,
  },
  {
    path: "/main",
    redirect: "/main/user",
    name: "Main",
    component: Main,
    children: [
      { path: "user", name: "user", component: User },
      { path: "shopuser", name: "shopuser", component: ShopUser },
      { path: "register", name: "register", component: Register },
      { path: "power", name: "power", component: Power },
      { path: "order", name: "order", component: Order },
      { path: "setting", name: "setting", component: Setting },
      { path: "help", name: "help", component: Help },
      {
        path: "user/userDetial/:id",
        name: "userDetial",
        component: UserDetial,
        props: true,
      },
      {
        path: "user/update/:id",
        name: "update",
        component: Update,
        props: true,
      },
      {
        path: "shopuser/shopuserDetial/:id",
        name: "shopuserDetial",
        component: shopUserDetial,
        props: true,
      },
      {
        path: "shopuser/shopupdate/:id",
        name: "shopupdate",
        component: shopUpdate,
        props: true,
      },
      {
        path: "order/orderDetial/:id",
        name: "orderDetial",
        component: orderDetial,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// 路由监测;
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("fengyuhoutai");
  if (token) {
    next();
  }
  if (to.path == "/login") {
    next();
  }
});

export default router;
