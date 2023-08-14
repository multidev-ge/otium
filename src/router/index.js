import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
