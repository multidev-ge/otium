import "./assets/main.css";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollPicker from 'vue-scroll-picker'
import i18n from './i18n';

const app = createApp(App);

app.use(i18n())
    .use(VueScrollPicker)
    .use(router)
    .mount("#app");
