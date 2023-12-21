import {
  createRouter,
  createWebHistory
} from "vue-router";
// import { useStore } from "vuex"
// import { computed } from "vue"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach(async (to, from) => {
  // return true
  // const store = useStore()
  // const pages = computed(() => store.getters('pages/pages'))
  // if(!pages.value) await store.dispatch('pages/getPages')
})

export default router;