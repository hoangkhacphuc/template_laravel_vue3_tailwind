import {
    createRouter,
    createWebHistory,
} from "vue-router";
import {
    Index,
    PageNotFound,
    Demo,
} from "../views";
import { DefaultLayout } from "../layouts";

const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        meta: { layout: DefaultLayout },
    },
    {
        path: "/demo",
        name: "demo",
        component: Demo,
        meta: { layout: DefaultLayout },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: PageNotFound,
        meta: { layout: DefaultLayout },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
