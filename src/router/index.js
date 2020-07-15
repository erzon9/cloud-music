import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../application/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/recommend",
    children: [
      {
        path: "/recommend",
        name: "Recommend",
        component: () =>
          import(/* webpackChunkName: "recommend" */ "../application/Recommend")
      },
      {
        path: "/singers",
        name: "Singers",
        component: () =>
          import(/* webpackChunkName: "singers" */ "../application/Singers")
      },
      {
        path: "/rank",
        name: "Rank",
        component: () =>
          import(/* webpackChunkName: "rank" */ "../application/Rank")
      }
    ]
  },
  {
    path: "/test",
    component: () => import("../application/Test.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
