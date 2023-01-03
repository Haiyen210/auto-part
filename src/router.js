import { createRouter, createWebHistory } from "vue-router";
import Banner from "./view/Banner/index";
import Department from "./view/Department/index";
import AccountUser from "./view/AccountUser/index";
import Home from "./view/home";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/banner",
        name: "banner",
        component: Banner,
    },
    {
        path: "/department",
        name: "department",
        component: Department,
    },
    {
        path: "/account_user",
        name: "account_user",
        component: AccountUser,
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;