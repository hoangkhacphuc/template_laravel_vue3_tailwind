import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Toasity from "vue3-toastify";
import Vue3Lottie from "vue3-lottie";
import "vue3-toastify/dist/index.css";
import "./assets/css/style.scss";
import router from "./router";
import App from "./App.vue";
import { createHead } from '@vueuse/head'
import { i18n } from './i18n'
import appMixin from './mixins/app-mixin'

const pinia = createPinia();
const head = createHead()

const app = createApp(App)
    .use(router)
    .use(head)
    .use(Vue3Lottie)
    .use(pinia)
    .use(i18n)
    .use(Vue3Toasity, {
        autoClose: 3000,
        multiple: false,
    })
    .mixin(appMixin)
    .mount("#app");
