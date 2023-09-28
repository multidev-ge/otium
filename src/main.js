import "./assets/main.css";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollPicker from 'vue-scroll-picker'
import {createI18n} from "vue-i18n";

const i18n = createI18n({});

const app = createApp(App);

app.use(i18n)
    .use(VueScrollPicker)
    .use(router)
    .mount("#app");
