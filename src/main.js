import "./assets/main.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import VueScrollPicker from 'vue-scroll-picker'
import i18n from './i18n'
import store from './store'

import 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js'

const app = createApp(App)

app.use(i18n())
app.use(VueScrollPicker)
app.use(router)
app.use(store)

app.mount("#app")