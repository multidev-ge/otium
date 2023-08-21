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
    component: () => import("../views/Pages/ContactPage.vue")
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
    path: '/floor',
    name: 'Floor',
    component: () => import('../views/Pages/FloorPage.vue')
  },
  {
    path: '/media-inner',
    name: 'MediaInner',
    component: () => import('../views/Pages/MediaInner.vue')
  },
  {
    path: '/apartment-finder',
    name: 'ApartmentFinder',
    component: () => import('../views/Pages/ApartmentFinder.vue')
  }]
})

export default router;