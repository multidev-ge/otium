import { defineComponent, defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Pages/Homepage.vue"),
    meta: {
      page_id: 3
    }
  },
  {
    path: '/company',
    name: 'OtiumBrandStory',
    component: () => import('@/views/Pages/OtiumBrandStory.vue'),
    meta: {
      page_id: 4
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Pages/ContactPage.vue"),
    meta: {
      page_id: 1
    }
  },
  {
    path: '/media',
    component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
    children: [
      {
        path: "",
        name: "Media",
        component: () => import('@/views/Pages/MediaPage.vue'),
        meta: {}
      },
      {
        path: ":id",
        name: "MediaInner",
        props: true,
        component: () => import('@/views/Pages/mediaInner.vue'),
        meta: {}
      },
    ]
  },
  {
    path: "/floors/:id",
    name: "Floor",
    props: true,
    component: () => import('@/views/Pages/FloorPage.vue'),
    meta: {}
  },
  {
    path: "/apartments/:id",
    name: "Apartment",
    props: true,
    component: () => import('@/views/Pages/ApartmentPage.vue'),
    meta: { }
  },
  {
    path: '/projects',
    name: "Projects",
    component: () => import('@/views/Pages/Projects.vue'),
    meta: {}
  },
  {
    path: '/projects/:id',
    name: "Project",
    props: true,
    component: () => import('@/views/Pages/ProjectInner.vue'),
    meta: {}
  },
  {
    path: '/projects/:id/details',
    name: "TechnicalPage",
    props: true,
    component: () => import('@/views/Pages/TechnicalPage.vue'),
    meta: {
      page_id: 5
    }
  },
  {
    path: '/apartment-finder',
    name: 'ApartmentFinder',
    component: () => import('@/views/Pages/ApartmentFinder.vue'),
    meta: {}
  },
]
export default routes