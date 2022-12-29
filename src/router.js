import { createRouter, createWebHistory } from "vue-router";
import Account from "./view/Account/index";
import Banner from "./view/Banner/index";
import Home from "./view/home";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/account",
        name: "account",
        component: Account,
    },
    {
        path: "/banner",
        name: "banner",
        component: Banner,
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;