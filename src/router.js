import { createRouter, createWebHistory } from "vue-router";
import Account from "./view/Account/index";
import Home from "./view/home";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/tai-khoan",
        name: "account",
        component: Account,
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;