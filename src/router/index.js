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
    {
      path: '/media-inner',
      name: 'mediaInner',
      component: () => import('../views/Pages/mediaInner.vue')
    },
    {
      path: '/apartment-finder',
      name: 'apartmentFinder',
      component: () => import('../views/Pages/apartmentFinder.vue')
    },

  ]
})

export default router;