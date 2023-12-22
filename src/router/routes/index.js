import { defineComponent } from "vue";
import { RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/Pages/Homepage.vue"),
    meta: {
      title: 'G'
    }
  },
  {
    path: '/company',
    name: 'OtiumBrandStory',
    component: () => import('../../views/Pages/OtiumBrandStory.vue'),
    meta: {
      title: 'G - Our Brand Story'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../../views/Pages/ContactPage.vue"),
    meta: {
      title: 'G - Contact'
    }
  },
  {
    path: '/media',
    component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
    children: [
      {
        path: "",
        name: "Media",
        component: () => import('../../views/Pages/MediaPage.vue'),
        meta: {
          title: 'G - Media'
        }
      },
      {
        path: ":id",
        name: "MediaInner",
        props: true,
        component: () => import('../../views/Pages/mediaInner.vue'),
        meta: {
          title: 'G - Media'
        }
      },
    ]
  },
  {
    path: "/floors/:id",
    name: "Floor",
    props: true,
    component: () => import('../../views/Pages/FloorPage.vue'),
    meta: {
      title: 'G - Floor'
    }
  },
  {
    path: "/apartments/:id",
    name: "Apartment",
    props: true,
    component: () => import('../../views/Pages/ApartmentPage.vue'),
    meta: {
      title: 'G - Apartment'
    }
  },
  {
    path: '/projects',
    component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
    children: [
      {
        path: "",
        name: "Projects",
        component: () => import('../../views/Pages/Projects.vue'),
        meta: {
          title: 'G - Projects'
        }
      },
      {
        path: '/projects/:id',
        name: "Project",
        props: true,
        component: () => import('../../views/Pages/ProjectInner.vue'),
        meta: {
          title: 'G - Project'
        }
      },
      {
        path: '/projects/:id/details',
        name: "TechnicalPage",
        props: true,
        component: () => import('../../views/Pages/TechnicalPage.vue'),
        meta: {
          title: 'G - Project Technical Caracteristics'
        }
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
    meta: {
      title: 'G - Find Apartment'
    }
  },
]
export default routes