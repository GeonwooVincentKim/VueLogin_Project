import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    // component: HomeView,
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
