import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/page/layout.vue";

import Login from "@/components/page/login.vue";
import loginList from "@/components/login/loginList.vue";
import loginOne from "@/components/login/loginOne.vue";
import loginOneList from "@/components/login/loginOneList.vue";
import loginTwo from "@/components/login/loginTwo.vue";
import loginTwoList from "@/components/login/loginTwoList.vue";

import Register from "@/components/page/register.vue";
import registerList from "@/components/register/registerList.vue";
import registerOne from "@/components/register/registerOne.vue";
import registerTwo from "@/components/register/registerTwo.vue";
import registerOneList from "@/components/register/registerOneList.vue";
import registerTwoList from "@/components/register/registerTwoList.vue";

import Firstpage from "@/components/nav/firstpage.vue";
import firstClass from "@/components/nav/firstClass.vue";
import secondClass from "@/components/nav/secondClass.vue";
import Reset from "@/components/page/reset.vue";
import Update from "@/components/page/update.vue";
import GoodDetails from "@/components/nav/goodDetails.vue";
import firstclassDetails from "@/components/nav/firstclassDetails.vue";

import shopcarOne from "@/components/shopcar/shopcarOne.vue";
import shopcarTwo from "@/components/shopcar/shopcarTwo.vue";
import shopcar from "@/components/shopcar/shopcar.vue";
import shopcarList from "@/components/shopcar/shopcarList.vue";
import shopcarOneList from "@/components/shopcar/shopcarOneList.vue";
import shopcarTwoList from "@/components/shopcar/shopcarTwoList.vue";

import goodOrder from "@/components/goodOrder/goodOrder.vue";
import goodOrderList from "@/components/goodOrder/goodOrderList.vue";
import goodOrderOne from "@/components/goodOrder/goodOrderOne.vue";
import goodOrderOneList from "@/components/goodOrder/goodOrderOneList.vue";
import goodOrderTwo from "@/components/goodOrder/goodOrderTwo.vue";
import goodOrderTwoList from "@/components/goodOrder/goodOrderTwoList.vue";

import queryResult from "@/components/queryResult/queryResult.vue";
import queryResultOne from "@/components/queryResult/queryResultOne.vue";
import queryResultTwo from "@/components/queryResult/queryResultTwo.vue";
import queryResultList from "@/components/queryResult/queryResultList.vue";
import queryResultOneList from "@/components/queryResult/queryResultOneList.vue";
import queryResultTwoList from "@/components/queryResult/queryResultTwoList.vue";

import secondclassDetails from "@/components/nav/secondclassDetails.vue";
const routes = [
  {
    path: "/",
    redirect: "/firstpage",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "firstpage",
        name: "Firstpage",
        component: Firstpage,
      },
      {
        path: "firstpage/:name/:id",
        name: "goodDetails",
        component: GoodDetails,
        props: true,
      },
      {
        path: "goodOrder",
        name: "goodOrder",
        component: goodOrder,
      },
      {
        path: "firstpage/:name/goodOrder",
        name: "goodOrderList",
        component: goodOrderList,
      },
      {
        path: "firstClass/goodOrder",
        name: "goodOrderOne",
        component: goodOrderOne,
      },
      {
        path: "secondClass/goodOrder",
        name: "goodOrderTwo",
        component: goodOrderTwo,
      },
      {
        path: "firstClass/:id/:name/goodOrder",
        name: "goodOrderOneList",
        component: goodOrderOneList,
      },
      {
        path: "secondClass/:id/goodOrder",
        name: "goodOrderTwoList",
        component: goodOrderTwoList,
      },
      {
        path: "queryResult",
        name: "queryResult",
        component: queryResult,
      },
      {
        path: "firstpage/:name/queryResult",
        name: "queryResultList",
        component: queryResultList,
      },
      {
        path: "firstClass/queryResult",
        name: "queryResultOne",
        component: queryResultOne,
      },
      {
        path: "secondClass/queryResult",
        name: "queryResultTwo",
        component: queryResultTwo,
      },
      {
        path: "firstClass/:id/:name/queryResult",
        name: "queryResultOneList",
        component: queryResultOneList,
      },
      {
        path: "secondClass/:id/queryResult",
        name: "queryResultTwoList",
        component: queryResultTwoList,
      },
      {
        path: "firstClass/:id",
        name: "firstClass",
        component: firstClass,
        props: true,
      },
      {
        path: "firstClass/:id/:name/:num",
        name: "firstclassDetails",
        component: firstclassDetails,
        props: true,
      },
      {
        path: "secondClass/:id",
        name: "secondClass",
        component: secondClass,
        props: true,
      },
      {
        path: "secondClass/:id/:num",
        name: "secondclassDetails",
        component: secondclassDetails,
        props: true,
      },
      {
        path: "shopcar",
        name: "shopcar",
        component: shopcar,
      },
      {
        path: "firstpage/:name/shopcar",
        name: "shopcarList",
        component: shopcarList,
      },
      {
        path: "firstClass/shopcar",
        name: "shopcarOne",
        component: shopcarOne,
      },
      {
        path: "secondClass/shopcar",
        name: "shopcarTwo",
        component: shopcarTwo,
      },
      {
        path: "firstClass/:id/:name/shopcar",
        name: "shopcarOneList",
        component: shopcarOneList,
      },
      {
        path: "secondClass/:id/shopcar",
        name: "shopcarTwoList",
        component: shopcarTwoList,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/firstpage/:name/login",
    name: "loginList",
    component: loginList,
  },
  {
    path: "/firstClass/login",
    name: "loginOne",
    component: loginOne,
  },
  {
    path: "/secondClass/login",
    name: "loginTwo",
    component: loginTwo,
  },
  {
    path: "/firstClass/:id/:name/login",
    name: "loginOneList",
    component: loginOneList,
  },
  {
    path: "/secondClass/:id/login",
    name: "loginTwoList",
    component: loginTwoList,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/firstpage/:name/register",
    name: "registerList",
    component: registerList,
  },
  {
    path: "/firstClass/register",
    name: "registerOne",
    component: registerOne,
  },
  {
    path: "/secondClass/register",
    name: "registerTwo",
    component: registerTwo,
  },
  {
    path: "/firstClass/:id/:name/register",
    name: "registerOneList",
    component: registerOneList,
  },
  {
    path: "/secondClass/:id/register",
    name: "registerTwoList",
    component: registerTwoList,
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset,
  },
  {
    path: "/update",
    name: "update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
