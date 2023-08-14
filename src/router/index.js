import {
  createRouter,
  createWebHistory
} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: "/",
      name: "Home",
      component: () => import("../views/Pages/Homepage.vue")
    },
    {
      path: '/otiumbrandstory',
      name: 'OtiumBrandStory',
      component: () => import('../views/Pages/OtiumBrandStory.vue')
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue")
    },
    {
      path: '/otiumbrandstory',
      name: 'OtiumBrandStory',
      component: () => import('../views/Pages/OtiumBrandStory.vue')
    },
    {
      path: '/media',
      name: 'Media',
      component: () => import('../views/Pages/MediaPage.vue')
    },
  ]
})

export default router;