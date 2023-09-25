import "./assets/main.css";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollPicker from 'vue-scroll-picker'


const app = createApp(App);

app.use(VueScrollPicker)
    .use(router)
    .mount("#app");
