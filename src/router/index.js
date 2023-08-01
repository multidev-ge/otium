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
      path: "/media-inner",
      name: "mediaInner",
      component: () => import("../views/mediaInner.vue"),
    },
  ],
});

export default router;
