import Vue from "vue";
import Router from "vue-router";
import BasicLayout from "./../layouts/BasicLayout.vue";
Vue.use(Router)

export default new Router({
  //mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "index",
      component: BasicLayout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/pages/home")
        },
        {
          path: "/play",
          name: "play",
          component: () => import("@/pages/play")
        },
        {
          path: "/scores",
          name: "scores",
          component: () => import("@/pages/scores")
        },
        {
          path: "/hongkong",
          name: "hongkong",
          component: () => import("@/pages/hongkong")
        },
        {
          path: "/newyork",
          name: "newyork",
          component: () => import("@/pages/newyork")
        },
        {
          path: "/tokyo",
          name: "tokyo",
          component: () => import("@/pages/tokyo")
        },
        {
          path: "/toronto",
          name: "toronto",
          component: () => import("@/pages/toronto")
        },
        {
          path: "/vancouver",
          name: "vancouver",
          component: () => import("@/pages/vancouver")
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("@/pages/contact")
        }
      ]
    }
  ]
});