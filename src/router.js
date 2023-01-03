import { createRouter, createWebHistory } from "vue-router";
import Account from "./view/Account/index";
import Category from "./view/Category/index";
import Factory from "./view/Factory/index";
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
    {
        path: "/categoryProduct",
        name: "category",
        component: Category,
    },
    {
        path: "/factory",
        name: "factory",
        component: Factory,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;