import { createRouter, createWebHistory } from "vue-router";
import Account from "./view/Account/index";
import Product from "./view/Product/index";
import WareHouse from "./view/WareHouse/index";
import BillDetail from "./view/BillDetail/index";
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
        path: "/product",
        name: "product",
        component: Product,
    },
    {
        path: "/warehouse",
        name: "warehouse",
        component: WareHouse,
    },
    {
        path: "/billdetaile",
        name: "billdetail",
        component: BillDetail,
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;