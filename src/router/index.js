import {
  createRouter,
  createWebHistory
} from "vue-router";
// import { useStore } from "vuex"
// import { computed } from "vue"
import routes from "./routes"
import { useTitle, useFavicon } from '@vueuse/core'
import favIcon from "@/assets/icons/favIcon.svg"
const icon = useFavicon()
icon.value = favIcon

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})




router.beforeEach(async (to, from) => {

  const {meta} = to
  const title = useTitle(meta?.title ?? 'G')
  // return true
  // const store = useStore()
  // const pages = computed(() => store.getters('pages/pages'))
  // if(!pages.value) await store.dispatch('pages/getPages')
})

export default router;