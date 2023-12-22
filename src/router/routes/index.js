import { defineComponent } from "vue";
import { RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/Pages/Homepage.vue")
  },
  {
    path: '/company',
    name: 'OtiumBrandStory',
    component: () => import('../../views/Pages/OtiumBrandStory.vue')
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../../views/Pages/ContactPage.vue")
  },
  {
    path: '/media',
    component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
    children: [
      {
        path: "",
        name: "Media",
        component: () => import('../../views/Pages/MediaPage.vue'),
      },
      {
        path: ":id",
        name: "MediaInner",
        component: () => import('../../views/Pages/mediaInner.vue'),
        props: true,
      },
    ]
  },
  {
    path: "/floors/:id",
    name: "Floor",
    props: true,
    component: () => import('../../views/Pages/FloorPage.vue'),
  },
  {
    path: "/apartments/:id",
    name: "Apartment",
    props: true,
    component: () => import('../../views/Pages/ApartmentPage.vue'),
  },
  {
    path: '/projects',
    component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
    children: [
      {
        path: "",
        name: "Projects",
        component: () => import('../../views/Pages/Projects.vue'),
      },
      {
        path: '/projects/:id',
        name: "Project",
        props: true,
        component: () => import('../../views/Pages/ProjectInner.vue')
      },
      {
        path: '/projects/:id/details',
        name: "TechnicalPage",
        props: true,
        component: () => import('../../views/Pages/TechnicalPage.vue'),
      },
      // {
        // path: ':id',
        // component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
        // children: [
          // {
            // path: "",
            // name: "project",
            // props: true,
            // component: () => import('../../views/Pages/ProjectInner.vue'),
          // },
          // {
            // path: "details",
            // name: "TechnicalPage",
            // component: () => import('../../views/Pages/TechnicalPage.vue'),
          // },
          // {
            // path: 'floor/:fid',
            // name: 'floors',
            // component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
            // children: [
              // {
                // path: "",
                // name: "Floor",
                // component: () => import('../../views/Pages/FloorPage.vue'),
              // },
              // {
                // path: "apartment/:aid",
                // name: "Apartment",
                // props: true,
                // component: () => import('../../views/Pages/ApartmentPage.vue'),
              // },
            // ]
          // },
        // ]
      // },
    ]
  },
  {
    path: '/apartment-finder',
    name: 'ApartmentFinder',
    component: () => import('../../views/Pages/ApartmentFinder.vue'),
  },
]
export default routes