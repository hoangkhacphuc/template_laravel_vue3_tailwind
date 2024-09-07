import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Toasity from "vue3-toastify";
import Vue3Lottie from "vue3-lottie";
import "vue3-toastify/dist/index.css";
import "./assets/css/style.scss";
import router from "./router";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App)
    .use(router)
    .use(Vue3Lottie)
    .use(pinia)
    .use(Vue3Toasity, {
        autoClose: 3000,
        multiple: false,
    })
    .mount("#app");
