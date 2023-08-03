import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Pages/Homepage.vue"),
    },
<<<<<<< HEAD

    {
      path: "/media-inner",
      name: "mediaInner",
      component: () => import("../views/mediaInner.vue"),
    },
=======
    {
      path: '/otiumbrandstory',
      name: 'OtiumBrandStory',
      component: () => import('../views/Pages/OtiumBrandStory.vue')
  },
>>>>>>> master
  ],
});

export default router;
