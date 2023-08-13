import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Pages/Homepage.vue"),
    },
    {
      path: '/otiumbrandstory',
      name: 'OtiumBrandStory',
      component: () => import('../views/Pages/OtiumBrandStory.vue')
  },
  ],
});

export default router;
