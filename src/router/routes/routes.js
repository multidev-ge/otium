import { defineComponent } from "vue";
import { RouterView } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../../views/Pages/Homepage.vue")
      },
      {
        path: '/otiumbrandstory',
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
          },
        ]
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
            path: ':id',
            component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
            children: [
              {
                path: "",
                name: "project",
                component: () => import('../../views/Pages/project.vue'),
              },
              {
                path: "details",
                name: "TechnicalPage",
                component: () => import('../../views/Pages/TechnicalPage.vue'),
              },
              {
                path: 'floor/:fid',
                component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
                children: [
                  {
                    path: "",
                    name: "Floor",
                    component: () => import('../../views/Pages/FloorPage.vue'),
                  },
                  {
                    path: "apartment/:aid",
                    name: "Apartment",
                    component: () => import('../../views/Pages/ApartmentPage.vue'),
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        path: '/apartment-finder',
        name: 'ApartmentFinder',
        component: () => import('../../views/Pages/ApartmentFinder.vue'),
      },
]
export default routes