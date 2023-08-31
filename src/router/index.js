import {
  createRouter,
  createWebHistory
} from "vue-router";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

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
    component: () => import('../views/Pages/mediaInner.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
    children: [
      {
        path: "",
        name: "Projects",
        component: () => import('../views/Pages/Projects.vue'),
      },
      {
        path: ":id",
        name: "TechnicalPage",
        component: () => import('../views/Pages/TechnicalPage.vue'),
      },
    ]
  },
  {
    path: '/apartment-finder',
    name: 'ApartmentFinder',
    component: () => import('../views/Pages/apartmentFinder.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Pages/projectsInner.vue')
  },
  {
    path: '/apartment',
    name: 'Apartment',
    component: () => import('../views/Pages/ApartmentPage.vue')
  }
  ]
})

export default router;